import { useState, useEffect } from 'react';
import Head from './components/Page1/JS/Head';
import ChatInput from "./components/Page1/JS/ChatInput"
import "./App.css"

const base_options_names = [
  "Добавить файл", 
  "Web-поиск",
  "Cпециализировнный поиск"
];

const open_settings = new OptionsSettings(base_options_names);

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const openOptionsFunction = () => {
    setIsOpenOptions(!isOpenOptions);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chatWrapperStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    position: "relative",
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90vw' : '50vw',
    zIndex: 1,
  };

  const [optionsNamesFalse, setOptionsNamesFalse] = useState(base_options_names);

  const handleOptionClick = (index, check_mark) => {
    if (index === 0) {
    } else if (index === 1) {
    } else if (index === 2) {
    }
    open_settings.changingNames(check_mark);
  };

  return (
    <>
      <Head />
      <div className="chat-input-wrapper">
        <ChatInput 
          styles={chatWrapperStyle} 
          optionsNamesFalse={optionsNamesFalse} 
          HandleOptionClick={handleOptionClick}
          OpenOptionsFunction={openOptionsFunction}
          isOpenOptions={isOpenOptions}
        />
      </div>
    </>
  );
}

export default App;
