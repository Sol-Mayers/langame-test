import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function SettingsDisplay() {
  return (
    <div className="settings-container">
      <div className="transaction-history-container2">
        <div className="settings-container2">
          <SvgIcon1 className="svg-container1" />
          <p className="settings-title">Настройки</p>
        </div>
      </div>
      <div className="settings-container1" />
    </div>
  );
}

export default SettingsDisplay;
