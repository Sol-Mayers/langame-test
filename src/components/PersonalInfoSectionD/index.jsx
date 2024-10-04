import NewsletterSignupViewD from "../NewsletterSignupViewD";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";

function PersonalInfoSection() {
  return (
    <div className="user-registration-form">
      <div className="user-card-container">
        <div className="flex-centered-column-container">
          <p className="name-subtitle">ФИО</p>
          <SvgIcon1 className="svg-container1" />
          <p className="full-name-title-text-style">Ковальчук Виталий Николаевич</p>
        </div>
        <SvgIcon2 className="svg-container2" />
      </div>
      <NewsletterSignupViewD />
    </div>
  );
}

export default PersonalInfoSection;
