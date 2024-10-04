import HourlyRateDisplay from "../HourlyRateDisplay";
import "./style.css";

function HourlyRateDisplayList({ hourlyRateComponentsList }) {
  return (
    <div className="hourly-rate-container2">
      {hourlyRateComponentsList.map((data, index) => {
        return <HourlyRateDisplay {...data} key={index} />;
      })}
    </div>
  );
}

export default HourlyRateDisplayList;
