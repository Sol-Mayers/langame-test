import TransactionHistoryWidget from "../TransactionHistoryWidget";
import BookNowSection from "../BookNowSection";
import "./style.css";

function DisplayContentSection() {
  return (
    <div className="transaction-history-section">
      <TransactionHistoryWidget />
      <BookNowSection />
    </div>
  );
}

export default DisplayContentSection;
