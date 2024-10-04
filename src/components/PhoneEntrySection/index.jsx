import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function PhoneEntrySection() {
  return (
    <div className="phone-number-input-wrapper">
      <input className="phone-number-input-container" placeholder="Введите номер телефона" defaultValue={'8 (495) 055 55 99'} />
      <SvgIcon1 className="svg-container-high" />
    </div>
  );
}

export default PhoneEntrySection;
