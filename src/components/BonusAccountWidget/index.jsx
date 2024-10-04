import "./style.css";

function BonusAccountWidget() {
  return (
    <div className="bonus-account-container">
      <p className="bonus-amount-text-style">
        <span className="bold-price-text">1 200</span>
        <span className="price-amount-symbol"> </span>
        <span className="price-tag-text">₽</span>
      </p>
      <p className="bonus-account-label">Бонусный счет</p>
    </div>
  );
}

export default BonusAccountWidget;
