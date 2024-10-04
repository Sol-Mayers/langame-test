import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function PhoneNumberSection() {
  return (
    <div className="phone-number-container">
      <SvgIcon1 className="svg-container3" />
      <div className="phone-number-container1">
        <p className="phone-number-label">Номер телефона</p>
        <p className="contact-info-heading">8 (495) 055 55 99</p>
      </div>
    </div>
  );
}

export default PhoneNumberSection;
