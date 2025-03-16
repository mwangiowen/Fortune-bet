import { useState } from "react";
import "./all.css"; 

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Link to Open FAQ Modal */}
      <button onClick={() => setIsOpen(true)} className="faq-open-btn">
        FAQ
      </button>

      {/* FAQ Modal */}
      {isOpen && (
        <div className="faq-overlay">
          <div className="faq-modal">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-description">
              Find answers to common questions about FortuneBet.
            </p>

            <div className="mt-4 space-y-3">
              <details className="faq-item">
                <summary className="faq-summary">How do I create an account?</summary>
                <p className="faq-answer">
                  To create an account, click on the sign-up button and follow the instructions.
                </p>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">What payment methods do you accept?</summary>
                <p className="faq-answer">
                  We accept credit cards, cryptocurrencies, and e-wallets.
                </p>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">Is FortuneBet secure?</summary>
                <p className="faq-answer">
                  Yes, we use top-notch security measures to protect your data and transactions.
                </p>
              </details>
            </div>

            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="faq-close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FAQ;
