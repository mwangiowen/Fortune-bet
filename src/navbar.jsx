import { FaSearch } from "react-icons/fa";
import Login from "./login";
import "./all.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>FortuneBet</span>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search Game" className="search-input" />
        <FaSearch className="search-icon" />
      </div>

      <Login />
    </nav>
  );
};

export default Navbar;
