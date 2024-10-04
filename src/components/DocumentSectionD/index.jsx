import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import "./style.css";

function DocumentSection() {
  return (
    <div className="document-card">
      <div className="birthdate-container">
        <SvgIcon1 className="svg-container6" />
        <div className="document-info-panel">
          <p className="phone-number-label">Документ</p>
          <div className="birthdate-container2">
            <p className="bold-title">Паспорт РФ</p>
            <SvgIcon2 className="svg-container7" />
          </div>
        </div>
      </div>
      <SvgIcon3 className="svg-container2" />
    </div>
  );
}

export default DocumentSection;
