import EnhancedProfileView from "../EnhancedProfileView";
import "./style.css";

function DynamicProfileSectionD() {
  return (
    <div className="primary-content-container">
      <div className="flex-container-row-aligned">
        <div className="registration-form-widget">
          <p className="large-number-text-style">23</p>
          <p className="standout-heading">Стандарт</p>
        </div>
        <div className="registration-form-layout">
          <p className="registration-title-heading">Регистрация </p>
          <EnhancedProfileView />
        </div>
      </div>
      <div className="footer-section">
        <div className="horizontal-layout-container">
          <div className="header-section">
            <p className="primary-navigation-links">
              Информация&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Вакансии&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Помощь&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Конфиденциальность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Правила&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FAQ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Прайс-лист{" "}
            </p>
            <div className="powered-by-section">
              <p className="powered-by-text">Powered by</p>
              <img src="/assets/image_d52541f6.png" alt="" className="powered-by-logo" />
              <p className="power-label">SOFTWARE</p>
            </div>
          </div>
          <div className="time-info-container">
            <div className="language-time-container">
              <p className="bold-heading">EN</p>
            </div>
            <p className="time-display-bold">16:40 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicProfileSectionD;
