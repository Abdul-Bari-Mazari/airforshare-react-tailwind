import MyDropzone from '../DropZone/MyDropZone';

function FileContainer() {
  return (
    <>
      {/* Input container */}
      <div className="h-[347px] p-5  flex flex-col space-y-7 w-full md:h-[434px] md:p-10">
        <h1 className="hidden text-5xl font-bold tracking-wider md:block">
          Files
        </h1>
        <div className="h-full">
          <MyDropzone />
        </div>
      </div>
    </>
  );
}

export default FileContainer;
