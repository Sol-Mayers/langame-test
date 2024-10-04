import UserDashboardView from "../UserDashboardView";
import RegistrationForm from "../RegistrationForm";
import "./style.css";

function NewsletterSignupView() {
  return (
    <div className="information-form-container">
      <UserDashboardView />
      <p className="newsletter-subscription-text">Я даю свое право на информационную рассылку</p>
      <RegistrationForm />
    </div>
  );
}

export default NewsletterSignupView;
