import { PiTextAlignLeftLight } from 'react-icons/pi';
import { MdOutlineFileCopy } from 'react-icons/md';

import TextContainer from './Text/TextContainer';
import FileContainer from './File/FileContainer';
import { useEffect, useState } from 'react';

function WorkingContainer({ appSeletedOption, setSelection }) {
  //   const [selectedOption, setSelectedOption] = useState(setSelection);

  const [textOptionColor, setTextOptionColor] = useState('text-gray-500');

  const [textOptionBgColor, setTextOptionBgColor] = useState('bg-bodyBgLight');

  const [fileOptionColor, setFileOptionColor] = useState('text-gray-500');

  const [fileOptionBgColor, setFileOptionBgColor] = useState('bg-bodyBgLight');

  useEffect(() => {
    if (appSeletedOption === 'TextContainer') {
      setTextOptionColor('text-themeColor');
      setTextOptionBgColor('bg-white');
    } else if (appSeletedOption === 'FileContainer') {
      setFileOptionColor('text-themeColor');
      setFileOptionBgColor('bg-white');
    }
    return () => {
      setTextOptionColor('text-gray-500');
      setTextOptionBgColor('bg-bodyBgLight');
      setFileOptionColor('text-gray-500');
      setFileOptionBgColor('bg-bodyBgLight');
    };
  }, [appSeletedOption]);

  return (
    <>
      <div
        className=" bg-boxLight dark:bg-boxDark shadow-xl mt-0 flex justify-center items-start 
        max-h-full md:mt-10
        "
      >
        {/* Sidebar */}
        <div className="hidden flex-col items-center justify-start h-full bg-bodyBgLight dark:bg-boxDark md:flex">
          <div
            onClick={() => {
              {
                setSelection('TextContainer');
                //   setSelectedOption(setSelection);
              }
            }}
            className={`cursor-pointer p-3 dark:bg-boxDark ${textOptionBgColor}`}
          >
            <PiTextAlignLeftLight
              className={`w-10 h-16 font-bold dark:bg-boxDark ${textOptionColor}`}
            />
          </div>

          <div
            onClick={() => {
              setSelection('FileContainer');
              // setSelectedOption(setSelection);
            }}
            className={`cursor-pointer p-3 dark:bg-boxDark ${fileOptionBgColor}`}
          >
            <MdOutlineFileCopy
              className={`w-10 h-16 font-bold dark:bg-boxDark ${fileOptionColor}`}
            />
          </div>
        </div>
        {/* Text Option */}
        {appSeletedOption === 'TextContainer' ? (
          <TextContainer />
        ) : (
          <FileContainer />
        )}
      </div>
    </>
  );
}

export default WorkingContainer;
