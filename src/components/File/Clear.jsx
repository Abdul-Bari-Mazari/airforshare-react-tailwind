function ClearText({ className, onClick }) {
  return (
    <>
      <p
        onClick={onClick}
        className={`cursor-pointer px-10 ${className}`}
      >
        Clear
      </p>
    </>
  );
}

export default ClearText;
