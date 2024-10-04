import DocumentSection from "../DocumentSection";
import DocumentVerificationSection from "../DocumentVerificationSectionD";
import "./style.css";

function DocumentSectionContainer() {
  return (
    <div className="document-info-section">
      <div className="document-info-container">
        <div className="document-card1">
          <DocumentSection />
        </div>
        <DocumentVerificationSection />
      </div>
      <p className="error-message-notice">Поле должно содержать 10&nbsp; Символоы</p>
    </div>
  );
}

export default DocumentSectionContainer;
