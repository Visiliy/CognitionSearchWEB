import "../UX/EnterBtn.css";

const EnterBtn = ({ openAuthorizationWindows }) => {
    return (
        <div className="enter-btn-wrapper">
            <button onClick={openAuthorizationWindows} className="enter-btn">Войти</button>
        </div>
    );
};

export default EnterBtn;