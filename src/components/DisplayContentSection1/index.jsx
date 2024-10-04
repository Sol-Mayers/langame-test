import AccountOverviewSection from "../AccountOverviewSection";
import ImageGalleryWidget from "../ImageGalleryWidget";
import "./style.css";

function DisplayContentSection1() {
  return (
    <div className="main-account-details">
      <AccountOverviewSection />
      <ImageGalleryWidget />
    </div>
  );
}

export default DisplayContentSection1;
