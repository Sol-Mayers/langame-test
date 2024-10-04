import SessionInfoDisplay from "../SessionInfoDisplay";
import "./style.css";

function SessionInfoContainer() {
  return (
    <div className="session-info-container1">
      <p className="session-info-heading">Информация о текущей сесии</p>
      <SessionInfoDisplay />
    </div>
  );
}

export default SessionInfoContainer;
