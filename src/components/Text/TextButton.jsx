function TextButton({ text, disabled, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`italic text-xl  w-full px-20 py-4 border font-extrabold tracking-widest active:bg-themeColor active:border-themeColor active:text-white border-black sm:max-w-min sm:self-end ${
          disabled === true
            ? ' active:bg-white active:border-gray-500 active:text-gray-300 text-gray-300 border border-gray-500'
            : 'text-black border-black'
        }`}
      >
        {text}
      </button>
    </>
  );
}

export default TextButton;
