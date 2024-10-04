import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function TransactionHistoryWidget() {
  return (
    <div className="transaction-history-container1">
      <div className="transaction-history-container2">
        <SvgIcon1 className="svg-container" />
        <p className="transaction-history-title">История транзакций</p>
      </div>
      <div className="transaction-history-container" />
    </div>
  );
}

export default TransactionHistoryWidget;
