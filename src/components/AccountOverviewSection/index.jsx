import AccountOverviewWidget from "../AccountOverviewWidget";
import EnhancedContentBlock from "../EnhancedContentBlock";
import "./style.css";

function AccountOverviewSection() {
  return (
    <div className="account-summary-container">
      <AccountOverviewWidget />
      <EnhancedContentBlock />
    </div>
  );
}

export default AccountOverviewSection;
