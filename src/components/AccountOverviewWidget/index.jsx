import BonusAccountWidget from "../BonusAccountWidget";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function AccountOverviewWidget() {
  return (
    <div className="transaction-history-section">
      <div className="account-info-container1">
        <p className="session-info-heading">Основной счет</p>
        <SvgIcon1 className="svg-container2" />
      </div>
      <div className="account-info-container">
        <p className="price-container">
          <span className="standout-text">15 000</span>
          <span className="price-highlighted"> </span>
          <span className="price-tag-text1">₽</span>
        </p>
        <BonusAccountWidget />
      </div>
    </div>
  );
}

export default AccountOverviewWidget;
