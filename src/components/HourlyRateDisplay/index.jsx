import "./style.css";

function HourlyRateDisplay({ hourlyRateComponent, htmlContentWithStyles }) {
  return (
    <div className="hourly-rate-container1">
      <p className="hourly-rate-label">{hourlyRateComponent}</p>
      <p className="hourly-rate-container" dangerouslySetInnerHTML={{ __html: htmlContentWithStyles }} />
    </div>
  );
}

export default HourlyRateDisplay;
