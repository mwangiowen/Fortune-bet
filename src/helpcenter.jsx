import { useState } from "react";
import "./all.css";

const HelpCenter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="help-center-button" onClick={() => setIsOpen(true)}>
        Help Center
      </button>

      {isOpen && (
        <div className="help-center-modal">
          <div className="help-center-content">
            <h2 className="help-center-title">Help Center</h2>
            <p className="help-center-text">
              Need assistance? Our support team is available 24/7 to help you with any issues.
              Check out our FAQs or contact support for further help.
            </p>
            <ul className="help-center-list">
              <li>📞 Contact Support: support@fortunebet.com</li>
              <li>📜 Read our FAQs for quick answers</li>
              <li>⚠️ Report an issue</li>
            </ul>
            <button className="help-center-close" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpCenter;
