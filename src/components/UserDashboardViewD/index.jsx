import ContactInfoSection from "../ContactInfoSectionD";
import DocumentSectionContainer from "../DocumentSectionContainerD";
import PasswordForm from "../PasswordFormD";
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
