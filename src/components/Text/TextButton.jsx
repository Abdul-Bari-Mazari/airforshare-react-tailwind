function TextButton({ text }) {
  return (
    <>
      <button
        disabled={true}
        className="w-full px-20 py-4 border font-extrabold tracking-widest  border-black sm:max-w-min sm:self-end"
      >
        {text}
      </button>
    </>
  );
}

export default TextButton;
