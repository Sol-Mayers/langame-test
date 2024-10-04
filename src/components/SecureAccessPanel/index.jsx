import UserAuthenticationSection from "../UserAuthenticationSection";
import LoginBox from "../LoginBox";
import "./style.css";

function SecureAccessPanel() {

  return (
    <div className="login-form-container1">
      <UserAuthenticationSection />
      <LoginBox />
    </div>
  );
}

export default SecureAccessPanel;
