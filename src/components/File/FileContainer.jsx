import MyDropzone from '../DropZone/MyDropZone';
import FileList from './FileList';
import { PiDownloadSimpleFill } from 'react-icons/pi';
import { MdDelete } from 'react-icons/md';
import { useCallback, useEffect, useState } from 'react';
import {
  getStorage,
  stRef,
  uploadBytesResumable,
  getDownloadURL,
  database,
  ref,
  set,
  onValue,
  remove,
  update,
  deleteObject,
  listAll,
} from '../../config/firebase';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { MoonLoader } from 'react-spinners';

function FileContainer() {
  const [files, setFiles] = useState([]);
  const [tempFiles, setTempFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const storage = getStorage();

  console.log(files);

  useEffect(() => {
    setLoading(true);
    const fileRef = ref(database, 'files');
    onValue(fileRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.fileUrl) {
        setFiles(data.fileUrl);
      }
      setLoading(false);
    });
  }, [database]);

  const onDrop = async (acceptedFiles) => {
    setTempFiles([...tempFiles, ...acceptedFiles]);
    let arr = [];
    acceptedFiles.forEach((fileFromArray) => {
      arr.push(uploadFiles(fileFromArray));
    });

    // resolve all promises
    const allFiles = await Promise.all(arr);
    console.log('allFiles', allFiles);

    // store files in realtime database
    setFiles([...files, ...allFiles]);
    update(ref(database, 'files'), {
      fileUrl: [...files, ...allFiles],
    });
    setTempFiles([]);
  };

  // upload files to firestore storage
  const uploadFiles = (fileFromArray) => {
    const storageRef = stRef(storage, `files/${fileFromArray.name}`);
    const uploadTask = uploadBytesResumable(storageRef, fileFromArray);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          reject(error);
          console.log('error:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve({
              url: downloadURL,
              type: fileFromArray.type,
              name: fileFromArray.name,
            });
          });
        }
      );
    });
  };

  // Download all files as zip
  const downloadAll = () => {
    setLoading(true);
    let filename = 'All-Files';
    const zip = new JSZip();
    const folder = zip.folder('project');
    files.forEach((file) => {
      const blobPromise = fetch(file.url).then(function (response) {
        console.log({ response });
        if (response.status === 200 || response.status === 0) {
          setLoading(false);
          return Promise.resolve(response.blob());
        } else {
          return Promise.reject(new Error(response.statusText));
        }
      });
      const name = file.name;
      folder.file(name, blobPromise);
    });

    zip
      .generateAsync({ type: 'blob' })
      .then((blob) => saveAs(blob, filename))
      .catch((e) => console.log(e));
  };

  // Delete all files
  const deleteFiles = async () => {
    setDeleteLoading(true);
    console.log('deleteLoading', deleteLoading);
    await remove(ref(database, 'files'));
    const storageRef = stRef(storage, 'files/');
    try {
      const listResult = await listAll(storageRef);
      const deletePromises = listResult.items.map((itemRef) =>
        deleteObject(itemRef)
      );

      await Promise.all(deletePromises);

      console.log('Successfully deleted all files');
      setDeleteLoading(false);
      setFiles([]);
    } catch (error) {
      console.log('Error deleting files:', error);
      setDeleteLoading(false);
    }
  };

  return (
    <>
      {/* Input container */}
      <div
        className={`relative min-h-[347px] p-5  flex flex-col space-y-7 w-full md:h-[434px] md:p-10`}
      >
        <div className="flex justify-center  md:justify-between md:items-center">
          <h1 className="hidden text-5xl font-bold tracking-wider md:block">
            Files
          </h1>
          <div className="flex justify-between items-center space-x-6">
            <div
              className="text-blue-600 flex gap-2 items-center justify-center cursor-pointer hover:underline active:opacity-80"
              onClick={downloadAll}
            >
              <PiDownloadSimpleFill className="w-6 h-6" />
              <p>Download All</p>
            </div>
            <div
              className="text-red-800 flex gap-2 items-center justify-center cursor-pointer hover:underline active:opacity-80"
              onClick={deleteFiles}
            >
              <MdDelete className="w-5 h-5" />
              <p>Delete All</p>
            </div>
          </div>
        </div>

        {loading === true || deleteLoading === true ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <MoonLoader
              color="#264ec0"
              size={35}
            />
          </div>
        ) : (
          <div className="h-full">
            {files.length !== 0 || tempFiles.length !== 0 ? (
              <FileList
                files={files}
                onDrop={onDrop}
                tempFiles={tempFiles}
              />
            ) : (
              <MyDropzone
                onDrop={onDrop}
                text="Drag and drop any files here, or click to select files"
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default FileContainer;
