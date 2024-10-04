import PasswordPrompt from "../PasswordPromptD";
import PasswordConfirmationBlock from "../PasswordConfirmationBlockD";
import "./style.css";

function PasswordForm() {
  return (
    <div className="password-input-container1">
      <div className="password-input-container2">
        <PasswordPrompt />
        <PasswordConfirmationBlock />
      </div>
      <div className="password-validation-message-container">
      </div>
    </div>
  );
}

export default PasswordForm;
