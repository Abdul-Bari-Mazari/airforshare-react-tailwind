import MyDropzone from '../DropZone/MyDropZone';
import { MdOutlineInsertDriveFile } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';
import LOADER from '../../assets/loader/loader.gif';

function FileList({ files, onDrop, tempFiles }) {
  return (
    <div className="flex flex-wrap justify-evenly items-center gap-2 sm:justify-normal">
      {/* Main files array */}
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
                  className="w-24 h-24 object-cover md:w-36 md:h-36"
                  src={v.url}
                  alt=""
                />
              ) : (
                <div className="border border-thinTextLight p-2 w-24 h-24  flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-100 md:w-36 md:h-36">
                  <MdOutlineInsertDriveFile className="w-10 h-10" />
                  <p className="text-fileNameTextLight text-center text-sm">
                    {v.name.slice(0, 5) + '...'}

                    <b>{v.name.slice(v.name.lastIndexOf('.'))}</b>
                  </p>
                </div>
              )}
            </a>
          </div>
        );
      })}

      {/* Temp array */}
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
                className="w-24 h-24 object-cover md:w-36 md:h-36"
                src={URL.createObjectURL(v)}
                alt=""
              />
            ) : (
              <div
                key={i}
                className="bg-gray-400 border border-thinTextLight p-2 w-24 h-24 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-10 0 md:w-36 md:h-36"
              >
                <MdOutlineInsertDriveFile className="w-10 h-10" />
                <p className="text-fileNameTextLight text-center text-sm">
                  {v.name.slice(0, 5) + '...'}

                  <b>{v.name.slice(v.name.lastIndexOf('.'))}</b>
                </p>
              </div>
            )}
          </div>
        );
      })}

      <div className="border border-dashed border-thinTextLight w-24 h-24  flex flex-col cursor-pointer hover:bg-slate-100 relative md:w-36 md:h-36 ">
        <div className="w-full h-full z-10">
          <MyDropzone onDrop={onDrop} />
        </div>
        <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <GoPlus className="w-8 h-8 md:w-1/2 md:h-1/2 mb-2" />
          <p className="hidden text-blue-500 text-sm font-bold md:block">
            Add File
          </p>
        </div>
      </div>
    </div>
  );
}

export default FileList;
