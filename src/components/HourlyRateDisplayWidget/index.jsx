import PricingComponent from "../PricingComponent";
import HourlyRateDisplayList from "../HourlyRateDisplayList";
import "./style.css";

function HourlyRateDisplayWidget({ hourlyRateComponentsList }) {
  return (
    <div className="pricing-card">
      <PricingComponent />
      <HourlyRateDisplayList hourlyRateComponentsList={hourlyRateComponentsList} />
    </div>
  );
}

export default HourlyRateDisplayWidget;
