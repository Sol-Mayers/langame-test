import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function DocumentVerificationSection() {
  return (
    <div className="card-with-number-input">
      <SvgIcon1 className="svg-container4" />
      <div className="number-input-container">
        <p className="phone-number-label">Укажите 10 цифр серия и номер</p>
        <p className="important-text">51№1030340</p>
      </div>
    </div>
  );
}

export default DocumentVerificationSection;
