import SecureAppSection from "../../components/SecureAppSection";
import "./SecureAppInfoSectionFilled.css";

function SecureAppInfoSectionFilled() {
  return (
    <div className="main-content-container-app filled-wrapper">
      <SecureAppSection />
      <div className="footer-section">
        <div className="horizontal-flex-container">
          <div className="header-section">
            <p className="primary-text-content-style">
              Информация&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Вакансии&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Помощь&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Конфиденциальность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Правила&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FAQ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Прайс-лист{" "}
            </p>
            <div className="powered-by-section">
              <p className="powered-by-label">Powered by</p>
              <img src="/assets/image_e90c732e.png" alt="" className="powered-by-logo" />
              <p className="bold-heading">SOFTWARE</p>
            </div>
          </div>
          <div className="time-indicator-container">
            <div className="time-box">
              <p className="bold-heading1">EN</p>
            </div>
            <p className="big-bold-black-text">16:40 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecureAppInfoSectionFilled;
