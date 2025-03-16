import "./all.css";
import Support from "./support";
import FAQ from "./faq";
import PartnershipProgram from "./partner";
import HelpCenter from "./helpcenter";
import Blog from "./blog";
import AMLPolicy from "./aml";
import SportsPolicy from "./policy";
import ResponsibleGaming from "./responsible";
import PrivacyPolicy from "./privacy";
import TermsAndConditions from "./terms";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div>
          <h2 className="footer-title">FortuneBet</h2>
          <p className="footer-text">
            FortuneBet Casino brings excitement to your fingertips with secure gaming, top-tier rewards,
            and unmatched entertainment. Play responsibly and enjoy a premium gaming experience anytime, anywhere.
          </p>
        </div>

        <div>
          <h3 className="footer-section-title">Platform</h3>
          <ul className="footer-links">
            <li><Support /></li>
            <li><FAQ /></li> 
            <li><PartnershipProgram /></li> 
            <li><Blog /></li> 
            <li><HelpCenter /></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-section-title">About Us</h3>
          <ul className="footer-links">
            <li><AMLPolicy /></li>
            <li><SportsPolicy /></li>
            <li><ResponsibleGaming /></li>
            <li><PrivacyPolicy /></li>
            <li><TermsAndConditions /></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-section-title">Community</h3>
          <ul className="footer-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter X</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved</p>
        <p>🔞 18+ Responsible Gaming</p>
      </div>
    </footer>
  );
};

export default Footer;
