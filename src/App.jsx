import AppNavbar from './components/Navbar';
import WorkingContainer from './components/WorkingContainer';
// LOGO
import { PiTextAlignLeftLight } from 'react-icons/pi';
import { MdOutlineFileCopy } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { ThemeContextProvider } from './contexts/themeContext';

function App() {
  const [seletedOption, setSelectedOption] = useState('TextContainer');

  const [textOptionColor, setTextOptionColor] = useState('text-gray-500');

  const [textOptionBgColor, setTextOptionBgColor] = useState('white');

  const [fileOptionColor, setFileOptionColor] = useState('text-gray-500');

  const [fileOptionBgColor, setFileOptionBgColor] = useState('white');

  // Set theme

  const [themeMode, setThemeMode] = useState('light');
  const html = document.querySelector('html');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setThemeMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    html.classList.remove('light', 'dark');
    html.classList.add(themeMode);
  }, [themeMode]);

  const switchMode = () => {
    const newTheme = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Set theme

  useEffect(() => {
    if (seletedOption === 'TextContainer') {
      setTextOptionColor('text-themeColor');
      setTextOptionBgColor('bg-white');
    } else if (seletedOption === 'FileContainer') {
      setFileOptionColor('text-themeColor');
      setFileOptionBgColor('bg-white');
    }
    return () => {
      setTextOptionColor('text-gray-500');
      setTextOptionBgColor('bg-bodyBgLight');
      setFileOptionColor('text-gray-500');
      setFileOptionBgColor('bg-bodyBgLight');
    };
  }, [seletedOption]);

  const setSelection = (selection) => {
    setSelectedOption(selection);
  };

  return (
    <ThemeContextProvider value={{ themeMode, switchMode }}>
      <div className="container flex flex-col justify-between mx-auto px-4 py-6 max-w-full md:px-7 lg:mt-8 lg:w-[60rem]">
        <AppNavbar />

        <div className="flex justify-between items-end">
          <h1 className=" mt-10 block mb-3 text-4xl font-bold tracking-wider text:white dark:text-darkText md:hidden">
            {seletedOption === 'TextContainer' ? 'Text' : 'File'}
          </h1>
          <div className="dark:bg-boxDark flex justify-center items-center md:hidden">
            <div
              className={`px-2 py-2 dark:bg-boxDark ${textOptionBgColor}`}
              onClick={() => {
                setSelectedOption('TextContainer');
              }}
            >
              <PiTextAlignLeftLight
                className={`w-10 h-10 ${textOptionColor}`}
              />
            </div>
            <div
              onClick={() => {
                setSelectedOption('FileContainer');
              }}
              className={`px-2 py-2 dark:bg-boxDark ${fileOptionBgColor}`}
            >
              <MdOutlineFileCopy className={`w-10 h-10 ${fileOptionColor}`} />
            </div>
          </div>
        </div>
        <WorkingContainer
          setSelection={setSelection}
          appSeletedOption={seletedOption}
        />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
