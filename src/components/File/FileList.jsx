import MyDropzone from '../DropZone/MyDropZone';
import { MdOutlineInsertDriveFile } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';
import LOADER from '../../assets/loader/loader.gif';
import { Link } from 'react-router-dom';

function FileList({ files, onDrop, tempFiles }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {files.map((v, i) => {
        return (
          <div
            key={i}
            className="cursor-pointer"
          >
            <a
              href={v.url}
              target="_black"
              download
              key={i}
            >
              {v.type.indexOf('image') !== -1 ? (
                <img
                  className="w-36 h-36 object-cover"
                  src={v.url}
                  alt=""
                />
              ) : (
                <div className="border border-thinTextLight p-2 w-36 h-36 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-100 ">
                  <MdOutlineInsertDriveFile className="w-10 h-10" />
                  <p className="text-fileNameTextLight text-center text-sm">
                    {v.name.slice(0, 7)}
                    {v.name.slice(
                      v.name.lastIndexOf('.') - 3,
                      v.name.lastIndexOf('.')
                    )}
                    <b>{v.name.slice(v.name.lastIndexOf('.'))}</b>
                  </p>
                </div>
              )}
            </a>
          </div>
        );
      })}
      {tempFiles.map((v, i) => {
        return (
          <div className="relative brightness-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                width={30}
                src={LOADER}
                alt=""
              />
            </div>
            {v.type.indexOf('image') !== -1 ? (
              <img
                className="w-36 h-36 object-cover"
                src={URL.createObjectURL(v)}
                alt=""
              />
            ) : (
              <div
                key={i}
                className="bg-gray-400 border border-thinTextLight p-2 w-36 h-36 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-100"
              >
                <MdOutlineInsertDriveFile className="w-10 h-10" />
                <p className="text-fileNameTextLight text-center text-sm">
                  {v.name.slice(0, 7) + '...'}
                  {v.name.slice(
                    v.name.lastIndexOf('.') - 3,
                    v.name.lastIndexOf('.')
                  )}
                  <b>{v.name.slice(v.name.lastIndexOf('.'))}</b>
                </p>
              </div>
            )}
          </div>
        );
      })}

      <div className="border border-dashed border-thinTextLight w-36 h-36 flex flex-col cursor-pointer hover:bg-slate-100 relative">
        <div className="w-full h-full z-10">
          <MyDropzone onDrop={onDrop} />
        </div>
        <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <GoPlus className="w-1/2 h-1/2 mb-2" />
          <p className="text-blue-500 text-sm font-bold">Add File</p>
          <p className="text-xs text-thinTextLight">(up to 5Mb)</p>
        </div>
      </div>
    </div>
  );
}

export default FileList;
