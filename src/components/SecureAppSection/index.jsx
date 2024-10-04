import SecurePanelWithRegistration from "../SecurePanelWithRegistration";
import AppInstallationSection from "../AppInstallationSection";
import "./style.css";

function SecureAppSection() {
  return (
    <div className="login-form-container1">
      <div className="login-form-container">
        <p className="large-black-number-text-style">23</p>
        <p className="standout-heading">Стандарт</p>
      </div>
      <div className="login-form-container3">
        <div className="login-form-container2">
          <SecurePanelWithRegistration />
          <AppInstallationSection />
        </div>
      </div>
    </div>
  );
}

export default SecureAppSection;
