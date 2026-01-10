import { useState, useEffect } from 'react';
import Head from './components/Page1/JS/Head';
import ChatInput from "./components/Page1/JS/ChatInput"
import "./App.css"

function App() {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <>
      <Head />
      <div className="chat-input-wrapper">
        <ChatInput styles={chatWrapperStyle} />
      </div>
    </>
  );
}

export default App;
