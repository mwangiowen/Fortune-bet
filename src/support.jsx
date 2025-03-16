import { useState } from "react";
import "./all.css";

const Support = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="support-button">
        Support
      </button>

      {isOpen && (
        <div className="support-modal">
          <div className="support-modal-content">
            <h2 className="support-title">Support Center</h2>
            <p className="support-text">
              Need help? Contact our support team anytime. We are available 24/7 to assist you!
            </p>

            <ul className="support-list">
              <li>📧 Email: support@fortunebet.com</li>
              <li>📞 Phone: +254 712 345 678</li>
              <li>💬 Live Chat: Available on our platform</li>
            </ul>

            <button onClick={() => setIsOpen(false)} className="support-close">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Support;
