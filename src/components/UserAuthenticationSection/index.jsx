import PhoneEntrySection from "../PhoneEntrySection";
import PasswordPrompt from "../PasswordPrompt";
import "./style.css";

function UserAuthenticationSection() {
  return (
    <div className="login-form-container1">
      <PhoneEntrySection />
      <PasswordPrompt />
      <p className="forgot-password-link-text-style">Забыли пароль? </p>
    </div>
  );
}

export default UserAuthenticationSection;
