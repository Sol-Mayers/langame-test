import PhoneNumberSection from "../PhoneNumberSectionD";
import PersonalInfoWidget from "../PersonalInfoWidgetD";
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
    </div>
  );
}

export default ContactInfoSection;
