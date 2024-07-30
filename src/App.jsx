import AppNavbar from './components/Navbar';
import WorkingContainer from './components/WorkingContainer';
// LOGO
import { PiTextAlignLeftLight } from 'react-icons/pi';
import { MdOutlineFileCopy } from 'react-icons/md';
import { useState } from 'react';
import TextContainer from './components/Text/TextContainer';
import FileContainer from './components/File/FileContainer';

function App() {
  const [seletedOption, setSelectedOption] = useState('TextContainer');
  return (
    <>
      <div className="container flex flex-col justify-between mx-auto px-4 py-6 max-w-full md:px-7 lg:mt-8 lg:w-[60rem]">
        <AppNavbar />

        <div className="flex justify-between items-end">
          <h1 className=" mt-10 block mb-3 text-4xl font-bold tracking-wider text:white dark:text-black md:hidden">
            Text
          </h1>
          <div className="flex justify-center items-center md:hidden">
            <div
              onClick={() => {
                setSelectedOption('TextContainer');
              }}
              className="px-2"
            >
              <PiTextAlignLeftLight className=" w-12 h-16" />
            </div>
            <div
              onClick={() => {
                setSelectedOption('FileContainer');
              }}
              className="px-2"
            >
              <MdOutlineFileCopy className="w-10 h-10" />
            </div>
          </div>
        </div>
        <WorkingContainer />
      </div>
    </>
  );
}

export default App;
