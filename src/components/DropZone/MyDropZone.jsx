import { useDropzone } from 'react-dropzone';

function MyDropzone({ text, onDrop }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className="flex items-center justify-center border-dotted border-2 border-boxBgLight px-6 h-full"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p className="text-center text-thinTextLight">{text}</p>
      )}
    </div>
  );
}

export default MyDropzone;
