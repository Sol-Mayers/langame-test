import ImageContentBlock from "../ImageContentBlock";
import AccessibleContent from "../AccessibleContent";
import "./style.css";

function AppInstallationSection() {
  return (
    <div className="app-download-section1">
      <p className="app-download-message">Установите приложение.</p>
      <div className="app-download-section">
        <ImageContentBlock />
        <AccessibleContent />
      </div>
    </div>
  );
}

export default AppInstallationSection;
