import { Button } from "@mui/base";
import FullView from "../FullView";
import PersonalInfoSection from "../PersonalInfoSectionD";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function EnhancedProfileView() {
  return (
    <div className="user-registration-form-style">
      <div className="center-aligned-flex-container">
        <FullView />
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="simplified-button">Упрощенная</Button>
      </div>
      <PersonalInfoSection />
      <div className="main-navigation-bar">
        <SvgIcon1 className="svg-container8" />
        <p className="main-link-text-style">вернутся на главную</p>
      </div>
    </div>
  );
}

export default EnhancedProfileView;
