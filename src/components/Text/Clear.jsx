function ClearText({ className, onClick }) {
  return (
    <>
      <p
        onClick={onClick}
        className={`cursor-pointer px-10 dark:text-darkText  ${className}`}
      >
        Clear
      </p>
    </>
  );
}

export default ClearText;
