import PhoneNumberSection from "../PhoneNumberSection";
import PersonalInfoWidget from "../PersonalInfoWidget";
import "./style.css";

function ContactInfoSection() {
  return (
    <div className="contact-info-container2">
      <div className="contact-info-container">
        <div className="contact-info-container1">
          <PhoneNumberSection />
        </div>
        <PersonalInfoWidget />
      </div>
      <p className="error-message-notification">Поле должно содержать 11 цифр</p>
    </div>
  );
}

export default ContactInfoSection;
