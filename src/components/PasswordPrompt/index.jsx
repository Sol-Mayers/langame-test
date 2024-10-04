import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function PasswordPrompt() {
  return (
    <div className="password-input-wrapper">
      <input className="password-input-container-hourly" placeholder="Введите пароль" defaultValue={'•  •  •  •  •  •  •  •'} />
      <SvgIcon1 className="svg-container-low" />
    </div>
  );
}

export default PasswordPrompt;
