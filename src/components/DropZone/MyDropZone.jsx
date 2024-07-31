import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone() {
  // useEffect(() => {
  //     const handleSize= () => {
  //         if (dbod)
  //     }
  // })

  const onDrop = useCallback((acceptedFiles) => {
    console.log('acceptedFiles', acceptedFiles);
  }, []);
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
        <p className="text-center text-thinTextLight">
          Drag and drop some files here, or click to select files
        </p>
      )}
    </div>
  );
}

export default MyDropzone;
