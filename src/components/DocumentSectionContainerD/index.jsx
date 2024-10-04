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
    </div>
  );
}

export default DocumentSectionContainer;
