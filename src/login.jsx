import { useState } from "react";
import "./all.css";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateForm = () => {
    const { name, email, password } = formData;
    if (!email || !password || (isSignUp && !name)) {
      setError("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    if (isSignUp) {
      setSuccess(`Account created successfully for ${formData.name}!`);
    } else {
      if (formData.email === "user@example.com" && formData.password === "password123") {
        setSuccess("Login Successful!");
      } else {
        setError("Invalid email or password.");
        return;
      }
    }

    setTimeout(() => {
      setIsOpen(false);
      setFormData({ name: "", email: "", password: "" });
      setError("");
      setSuccess("");
    }, 2000);
  };

  return (
    <div className="flex items-center space-x-4">
      <button className="text-gray-300 hover:text-white transition" onClick={() => { setIsSignUp(false); setIsOpen(true); }}>
        Log In
      </button>
      <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full transition" onClick={() => { setIsSignUp(true); setIsOpen(true); }}>
        Join Now
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-xl font-bold mb-4">{isSignUp ? "Sign Up" : "Log In"}</h2>

            {isSignUp && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input-field"
                value={formData.name}
                onChange={handleInputChange}
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
              value={formData.email}
              onChange={handleInputChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-field"
              value={formData.password}
              onChange={handleInputChange}
            />

            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}

            <button onClick={handleSubmit} className="button-primary">
              {isSignUp ? "Sign Up" : "Login"}
            </button>

            <p className="text-sm text-gray-400 mt-3 text-center">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span className="text-purple-400 cursor-pointer hover:underline" onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? "Log In" : "Sign Up"}
              </span>
            </p>

            <button className="button-cancel" onClick={() => { setIsOpen(false); setError(""); setSuccess(""); }}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
