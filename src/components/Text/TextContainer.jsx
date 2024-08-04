import TextButton from './TextButton';
import { database, ref, set, onValue, remove } from '../../config/firebase';
import { useEffect, useState } from 'react';
import ClearText from './Clear';
import { MoonLoader } from 'react-spinners';

function TextContainer() {
  const [textValue, setTextValue] = useState('');
  const [isText, setIsText] = useState(false);
  const [loader, setLoader] = useState(false);

  const autoGrowTextArea = (e) => {
    e.style.height = '5px';
    e.style.height = e.scrollHeight + 'px';
  };

  function writeUserData() {
    set(ref(database, 'text'), {
      text: textValue,
    });
    console.log('textValue', textValue);
  }

  useEffect(() => {
    setLoader(true);
    const textRef = ref(database, 'text');
    onValue(textRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTextValue(data.text);
        if (data.text) {
          setIsText(true);
        }
      }
      setLoader(false);
    });
  }, []);

  async function clearText() {
    await remove(ref(database, 'text'));
    setTextValue('');
    setIsText(false);
  }

  return (
    <>
      {/* Input container */}
      <div className="relative p-5 flex flex-col space-y-7 w-full h-full md:p-10">
        <h1 className="hidden text-5xl font-bold tracking-wider md:block">
          Text
        </h1>
        {loader === true && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <MoonLoader
              color="#264ec0"
              size={35}
            />
          </div>
        )}
        <div className={`flex h-full `}>
          <textarea
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value);
              setIsText(false);
            }}
            onInput={() => autoGrowTextArea(event.target)}
            className="textareaStyles "
            placeholder="Type something..."
          ></textarea>
        </div>

        <div className="flex flex-row items-center justify-center gap-6 flex-wrap-reverse sm:justify-end ">
          <ClearText
            className={textValue ? 'block' : 'hidden'}
            onClick={clearText}
          />

          {isText ? (
            <TextButton
              text="Copy"
              disabled={!textValue ? true : false}
              onClick={() => {
                navigator.clipboard.writeText(textValue);
              }}
            />
          ) : (
            <TextButton
              text="Save"
              disabled={!textValue ? true : false}
              onClick={writeUserData}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default TextContainer;
