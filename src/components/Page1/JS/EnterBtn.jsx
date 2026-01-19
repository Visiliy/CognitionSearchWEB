import Cookies from "../../../Servises/Cookies";
import "../UX/EnterBtn.css";
import { useNavigate } from "react";

const EnterBtn = ({ openAuthorizationWindows }) => {

    const cookies = new Cookies();
    const cookie_name = cookies.getCookie("session_id");

    const toWorkspace = () => {
        useNavigate("/workspace");
    }

    return (
        <div className="enter-btn-wrapper">
            {!cookie_name ? <button onClick={openAuthorizationWindows} className="enter-btn">Войти</button> : <button onClick={toWorkspace} className="enter-btn">Workspace</button>}
        </div>
    );
};

export default EnterBtn;