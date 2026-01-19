import "../UX/Head.css";
import logo from "../../../assets/logo.jpeg";
import EnterBtn from "./EnterBtn";

const Head = ({ openAuthorizationWindows }) => {
    return (
        <div className="head-wrapper">
            <div className="head-container">
                <img src={logo} alt="logo" className="head-logo" />
                <span className="head-title">Cognition LLM</span>
            </div>
            <EnterBtn openAuthorizationWindows={openAuthorizationWindows}/>
        </div>

    );
}

export default Head;