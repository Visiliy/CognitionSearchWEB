import "../UX/ChatInput.css";
import { useRef, useEffect, useState } from "react";
import Options from "./Options";

const ChatInput = ({ files, styles }) => {
    const textareaRef = useRef(null);
    const [text, setText] = useState("");
    const [isOpenOptions, setIsOpenOptions] = useState(false);

    const openOptionsFunction = () => {
        setIsOpenOptions(!isOpenOptions);
    }

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    const handleOptionClick = (index) => {
    
        if (index === 0) {
        } else if (index === 1) {
        } else if (index === 2) {
        }
    };

    useEffect(() => {
        adjustHeight();
    }, [text]);

    return (
        <div style={styles} >
            <h2 className="main-text-1">Cognition</h2>
            <h3 className="main-text-2">Точность и информативность превыше всего</h3>
            {
                isOpenOptions && <Options handleOptionClick={handleOptionClick}/>
            }
            <div className="chat">
                <textarea 
                    ref={textareaRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onInput={adjustHeight}
                    placeholder={!isOpenOptions && "Задай любой вопрос..."}
                    className="chat-input-text-area"
                />
                <button className="options-btn" onClick={openOptionsFunction}>{!isOpenOptions ? "+" : "x"}</button>
                {files && <div>{files}</div>}
                <button className="send-btn">↑</button>
            </div>
        </div>
    );
};

export default ChatInput;
