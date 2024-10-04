import "./style.css";

function SessionInfoDisplay() {
  return (
    <div className="session-info-container3">
      <div className="session-info-container2">
        <p className="session-info-text">Осталось минут:</p>
        <p className="countdown-info">120 мин.</p>
      </div>
      <div className="session-expiration-info-container">
        <p className="session-info-text">Сессия истекает:</p>
        <p className="countdown-info">14.12.2020, 20:24</p>
      </div>
    </div>
  );
}

export default SessionInfoDisplay;
