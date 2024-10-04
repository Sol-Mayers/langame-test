import ContactInfoSection from "../ContactInfoSection";
import DocumentSectionContainer from "../DocumentSectionContainer";
import PasswordForm from "../PasswordForm";
import "./style.css";

function UserDashboardView() {
  return (
    <div className="form-section-container">
      <ContactInfoSection />
      <DocumentSectionContainer />
      <PasswordForm />
    </div>
  );
}

export default UserDashboardView;
