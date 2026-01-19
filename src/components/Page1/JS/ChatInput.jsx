import "../UX/ChatInput.css";
import { useRef, useEffect, useState } from "react";
import Options from "./Options";

const ChatInput = ({ files, styles, optionsNamesFalse, HandleOptionClick, OpenOptionsFunction, isOpenOptions, isRenderWords }) => {
    const textareaRef = useRef(null);
    const [text, setText] = useState("");

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustHeight();
    }, [text]);

    return (
        <div style={styles} >
            {
                isRenderWords && <>
                    <h2 className="main-text-1">Cognition LLM</h2>
                    <h3 className="main-text-2">Точность и информативность превыше всего</h3>
                </>
            }
            {
                isOpenOptions && <Options 
                handleOptionClick={HandleOptionClick} 
                optionsNamesFalse={optionsNamesFalse}
                />
            }
            <div className="chat">
                <textarea 
                    ref={textareaRef}
                    value={text}
                    wrap="soft"
                    onChange={(e) => setText(e.target.value)}
                    onInput={adjustHeight}
                    placeholder={!isOpenOptions && "Задай любой вопрос..."}
                    className="chat-input-text-area"
                />
                <button className="options-btn" onClick={OpenOptionsFunction}>{!isOpenOptions ? "+" : "x"}</button>
                {files && <div>{files}</div>}
                <button className="send-btn">↑</button>
            </div>
        </div>
    );
};

export default ChatInput;
