import { useState } from "react";
import "../UX/Authorization.css";

const Authorization = () => {
    const [isFlag, setIsFlag] = useState(true);

    return (
        <div className="authorization-wrapper">
            {
                isFlag ? <div className="enter-warpper">
                    <p className="main-mod-text">Вход</p>
                    <input type="email" className="email-input" placeholder="почта"/>
                    <input type="password" className="password-input" placeholder="пароль"/>
                    <button className="enter-form-btn">Войти</button>
                    <div className="to-reg-form-wrapper">
                        <p>Нет аккаунта?</p>
                        <p className="to-reg-btn">Зарегистрироваться</p>
                    </div>
                </div> : 
                <div>

                </div>
            }
        </div>
    );
}

export default Authorization;