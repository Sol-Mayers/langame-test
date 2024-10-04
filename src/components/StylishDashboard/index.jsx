import SessionInfoContainer from "../SessionInfoContainer";
import ReleaseBlock from "../ReleaseBlock";
import "./style.css";

function StylishDashboard() {
  return (
    <div className="session-info-container">
      <SessionInfoContainer />
      <ReleaseBlock />
    </div>
  );
}

export default StylishDashboard;
