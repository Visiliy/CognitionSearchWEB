import "../UX/Options.css";

const Options = ({ handleOptionClick, optionsNamesFalse }) => {
    return (
      <div className="options-wrapper">
        <ul>
          {optionsNamesFalse.map((text, index) => (
            <li
              className="li-in-options"
              key={index}
              onClick={() => handleOptionClick(index, "✓")}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default Options;
  