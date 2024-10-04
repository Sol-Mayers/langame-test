import DashboardLayout from "../DashboardLayout";
import HourlyRateDisplaySection from "../HourlyRateDisplaySection";
import "./style.css";

function HourlyRateDashboardView({ hourlyRateComponentsList }) {
  return (
    <div className="dashboard-layout">
      <div className="sidebar-container">
        <img src="/assets/image_661b8a16.png" alt="" className="transaction-history-icon" />
        <div className="transaction-history-divider" />
        <DashboardLayout />
      </div>
      <HourlyRateDisplaySection hourlyRateComponentsList={hourlyRateComponentsList} />
    </div>
  );
}

export default HourlyRateDashboardView;
