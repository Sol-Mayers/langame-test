import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import "./style.css";

function PersonalInfoWidget() {
  return (
    <div className="birthdate-container1">
      <div className="birthdate-container">
        <SvgIcon1 className="svg-container4" />
        <div className="birth-date-container">
          <p className="phone-number-label">Дата рождения</p>
          <div className="birthdate-container2">
            <p className="bold-title">10 июня 1990</p>
            <SvgIcon2 className="svg-container5" />
          </div>
        </div>
      </div>
      <SvgIcon3 className="svg-container2" />
    </div>
  );
}

export default PersonalInfoWidget;
