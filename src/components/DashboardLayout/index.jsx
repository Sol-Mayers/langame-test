import DisplayContentSection from "../DisplayContentSection";
import SettingsDisplay from "../SettingsDisplay";
import SupportSection from "../SupportSection";
import "./style.css";

function DashboardLayout() {
  return (
    <div className="transaction-history-section1">
      <DisplayContentSection />
      <SettingsDisplay />
      <SupportSection />
    </div>
  );
}

export default DashboardLayout;
