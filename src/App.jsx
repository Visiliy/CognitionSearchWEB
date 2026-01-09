import './App.css'
import ChatInput from './components/Page1/JS/ChatInput'
import Head from './components/Page1/JS/Head'

function App() {

  const chatWrapperStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    zIndex: 1
  };


  return (
    <>
      <Head />
      <div className="chat-input-wrapper">
        <ChatInput styles={chatWrapperStyle} />
      </div>
    </>
  )
}

export default App
