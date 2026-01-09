import "../UX/Head.css";
import logo from "../../../assets/logo.jpeg";
import EnterBtn from "./EnterBtn";

const Head = () => {
    return (
        <div className="head-wrapper">
            <div className="head-container">
                <img src={logo} alt="logo" className="head-logo" />
                <span className="head-title">Cognition</span>
            </div>
            <EnterBtn />
        </div>

    );
}

export default Head;