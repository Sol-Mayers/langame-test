import StylishDashboard from "../StylishDashboard";
import DisplayContentSection1 from "../DisplayContentSection1";
import HourlyRateDisplayWidget from "../HourlyRateDisplayWidget";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function HourlyRateDisplaySection({ hourlyRateComponentsList }) {
  return (
    <div className="main-content-container">
      <div className="flex-container-with-text-aligned-bottom">
        <div className="profile-card-container">
          <div className="profile-info-container">
            <img src="/assets/image_b325554d.png" alt="" className="profile-image-container" />
            <p className="full-name-title">Алексей Костылев Николаевич</p>
          </div>
          <StylishDashboard />
        </div>
        <div className="sidebar-container1">
          <div className="status-card">
            <div className="status-info-panel1">
              <p className="status-info-text">Текущий статус: </p>
              <p className="status-message">До смены статуса осталось:</p>
            </div>
            <div className="status-info-panel">
              <p className="standart-title">Standart</p>
              <p className="time-display-bold-hourly">10 часов 23 минуты</p>
            </div>
          </div>
          <DisplayContentSection1 />
        </div>
        <HourlyRateDisplayWidget hourlyRateComponentsList={hourlyRateComponentsList} />
      </div>
      <div className="action-panel">
        <div className="desktop-access-panel">
          <img src="/assets/image_44bdc126.png" alt="" className="desktop-icon-text" />
          <p className="desktop-return-button-style">вернуться на рабочий стол</p>
        </div>
        <div className="game-selection-container1">
          <div className="game-selection-container">
            <SvgIcon1 className="svg-container4" />
            <p className="game-selection-title">выбрать игру</p>
          </div>
        </div>
        <div className="feedback-card">
          <img src="/assets/image_3df7176e.png" alt="" className="report-icon" />
          <p className="report-link-text-style">Сообщить о проблеме</p>
        </div>
        <div className="session-control-panel">
          <img src="/assets/image_ae72912d.png" alt="" className="session-extension-icon" />
          <p className="session-extension-button-style">Продлить сессию</p>
        </div>
        <div className="session-control-panel1">
          <img src="/assets/image_c5934a99.png" alt="" className="session-complete-icon" />
          <p className="session-completion-message-style">завершить сессию</p>
        </div>
      </div>
      <div className="powered-by-software-section">
        <p className="brand-label">Powered by</p>
        <img src="/assets/image_a4c38a50.png" alt="" className="powered-by-logo" />
        <p className="bold-heading">SOFTWARE</p>
      </div>
    </div>
  );
}

export default HourlyRateDisplaySection;
