import { useState } from "react";
import "./all.css";

const PartnershipProgram = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="partnership-button">
        Partnership Program
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Partnership Program</h2>
            <p className="modal-text">
              Join our exclusive partnership program and earn rewards by referring players to FortuneBet.
              Enjoy high commissions, exclusive benefits, and dedicated support.
            </p>
            <button onClick={() => setIsOpen(false)} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnershipProgram;
