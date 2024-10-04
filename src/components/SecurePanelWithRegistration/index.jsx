import SecureAccessPanel from "../SecureAccessPanel";
import "./style.css";

function SecurePanelWithRegistration() {
  return (
    <div className="login-form-container1">
      <SecureAccessPanel />
      <div className="registration-section">
        <div className="registration-section1">
          <p className="registration-message">Если у вас еще нет аккаунта?</p>
          <p className="registration-prompt-text-style">Зарегистрируйтесь</p>
        </div>
      </div>
    </div>
  );
}

export default SecurePanelWithRegistration;
