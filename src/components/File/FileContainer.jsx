import MyDropzone from '../DropZone/MyDropZone';

function FileContainer() {
  return (
    <>
      {/* Input container */}
      <div className="h-[347px] p-5 border border-black flex flex-col space-y-7 w-full md:h-[436.8px] md:p-10">
        <h1 className="hidden text-5xl font-bold tracking-wider md:block">
          File
        </h1>
        <div className="h-full">
          <MyDropzone />
        </div>
      </div>
    </>
  );
}

export default FileContainer;
