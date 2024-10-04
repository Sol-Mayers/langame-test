import PasswordPrompt from "../PasswordPrompt";
import PasswordConfirmationBlock from "../PasswordConfirmationBlock";
import "./style.css";

function PasswordForm() {
  return (
    <div className="password-input-container1">
      <div className="password-input-container2">
        <PasswordPrompt />
        <PasswordConfirmationBlock />
      </div>
      <div className="password-validation-message-container">
        <p className="password-requirement-message">Пароль должен быть не менее 6 символов</p>
        <p className="red-alert-message">Пароль должен быть не менее 6 символов</p>
      </div>
    </div>
  );
}

export default PasswordForm;
