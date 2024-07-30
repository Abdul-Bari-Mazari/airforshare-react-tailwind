import TextButton from './TextButton';

function TextContainer() {
  const autoGrowTextArea = (e) => {
    e.style.height = '5px';
    e.style.height = e.scrollHeight + 'px';
  };
  return (
    <>
      {/* Input container */}
      <div className="p-5 border border-black flex flex-col space-y-7 w-full h-full md:p-10">
        <h1 className="hidden text-5xl font-bold tracking-wider md:block">
          Text
        </h1>
        <div className="flex h-full">
          <textarea
            onInput={() => autoGrowTextArea(event.target)}
            className="flex-1 min-h-48 placeholder:text-l placeholder:text-thinTextLight placeholder:font-thin outline-none overflow-hidden resize-none border border-green-600 md:placeholder:text-lg"
            placeholder="Type something..."
          ></textarea>
        </div>
        <TextButton
          text="Save"
          disabled={true}
        />
      </div>
    </>
  );
}

export default TextContainer;
