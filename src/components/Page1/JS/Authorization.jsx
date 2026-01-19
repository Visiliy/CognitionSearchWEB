import { useState } from "react";
import "../UX/Authorization.css";
import AuthorizationAPI from "../../../Servises/AuthorizationAPI.js";
import Cookies from "../../../Servises/Cookies";
import SystemFunctions from "../../../Servises/SystemFunctions";

const Authorization = () => {
    const [isFlag, setIsFlag] = useState(true);
    const [emailText, setEmailText] = useState("");
    const [passwordText, setPasswordText] = useState("");
    const [checkboxFlag, setCheckboxFlag] = useState(false);

    const remainFlag = () => {
        setIsFlag(!isFlag);
    }

    const interactionWithServer1 = async () => {
        const sys = new SystemFunctions();
        const session_id = sys.generateSessionId();
        const authorization_api = new AuthorizationAPI(session_id, "http://localhost:10000");
    
        const data = {
            email: emailText,
            password: passwordText
        };
    
        const response = await authorization_api.login(data);
        alert(response.result.message);
    
        if (response.result.flag === true) {
            const cookies = new Cookies();
            cookies.makeCookie("session_id", session_id);
        }
    };

    const interactionWithServer2 = async () => {
        const sys = new SystemFunctions();
        const session_id = sys.generateSessionId();
        const authorization_api = new AuthorizationAPI(session_id, "http://localhost:10000");
    
        const data = {
            email: emailText,
            password: passwordText
        };
    
        const response = await authorization_api.registrations(data);
        alert(response.result.message);
    
        if (response.result.flag === true) {
            const cookies = new Cookies();
            cookies.makeCookie("session_id", session_id);
        }
    };

    return (
        <div className="authorization-wrapper">
            {
                isFlag ? <div className="enter-warpper">
                    <p className="main-mod-text">Вход</p>
                    <input type="email" className="email-input" placeholder="почта" required value={emailText} onChange={(e) => setEmailText(e.target.value)}/>
                    <input type="password" className="password-input" placeholder="пароль" required value={passwordText} onChange={(e) => setPasswordText(e.target.value)}/>
                    <button className="enter-form-btn" onClick={interactionWithServer1}>Войти</button>
                    <div className="to-reg-form-wrapper">
                        <p>Нет аккаунта?</p>
                        <p className="to-reg-btn" onClick={remainFlag}>Зарегистрироваться</p>
                    </div>
                </div> : 
                <div className="enter-warpper">
                    <p className="main-mod-text">Регистрация</p>
                    <input type="email" className="email-input" placeholder="почта" required value={emailText} onChange={(e) => setEmailText(e.target.value)}/>
                    <input type="password" className="password-input" placeholder="пароль" required value={passwordText} onChange={(e) => setPasswordText(e.target.value)}/>
                    <button className="enter-form-btn" onClick={interactionWithServer2}>Зарегистрироваться</button>
                    <div className="is-business-bccount">
                    <input type="checkbox" className="is-business-bccount-checkbox" checked={checkboxFlag} onChange={(e) => setCheckboxFlag(e.target.checked)}/>
                    <p className="is-business-bccount-text">Создать бизнес аккаунт</p>
                    </div>
                    <div className="to-reg-form-wrapper">
                        <p>Есть аккаунт?</p>
                        <p className="to-reg-btn" onClick={remainFlag}>Войти</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Authorization;