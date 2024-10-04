import UserDashboardView from "../UserDashboardViewD";
import RegistrationForm from "../RegistrationFormD";
import "./style.css";

function NewsletterSignupView() {
  return (
    <div className="information-form-container">
      <UserDashboardView />
      <div className="newsletter-button-wrapper"><button className="newsletter-button"></button>
      <p className="newsletter-subscription-text">Я даю свое право на информационную рассылку</p></div>
      <RegistrationForm />
    </div>
  );
}

export default NewsletterSignupView;
