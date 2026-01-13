import { useState } from "react";
import "../UX/Options.css";

const Options = ({ handleOptionClick }) => {

    const [optionsNamesFalse, setOptionsNamesFalse] = useState(
        [
            "Добавить файл",
            "Мультиагентный режим",
            "Web поиск"
        ]
    );

    const [optionsNamesTrue, setOptionsNamesTrue] = useState(
        [
            "Добавить файл",
            "Мультиагентный режим ✓",
            "Web поиск ✓"
        ]
    );

    return (
        <div className="options-wrapper">
            <ul>
                {
                    optionsNamesFalse.map((text, index) => (
                        <li className="li-in-options" key={index} onClick={
                            () => handleOptionClick(index)
                        }>{text}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Options;