import { FaHome, FaTrophy, FaGift, FaStar, FaChartLine } from "react-icons/fa";
import "./all.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-icon">
          <span>S</span>
        </div>
        <div>
          <h3 className="profile-name">Security Live Coin</h3>
          <p className="profile-subtext">Dashboard</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <h4 className="sidebar-section-title">Main</h4>
        <SidebarItem icon={<FaHome />} label="Casino" active />
        <SidebarItem icon={<FaTrophy />} label="Sports" />
      </nav>

      <div className="sidebar-nav mt-6">
        <h4 className="sidebar-section-title">More</h4>
        <SidebarItem icon={<FaGift />} label="NFT" />
        <SidebarItem icon={<FaStar />} label="SPQ Lottery 9,000" badge />
        <SidebarItem icon={<FaTrophy />} label="Jackpot 15,031" badge />
        <SidebarItem icon={<FaChartLine />} label="Race 9,124" badge="NEW" />
        <SidebarItem icon={<FaGift />} label="Sponsorships" />
      </div>
    </aside>
  );
};

const SidebarItem = ({ icon, label, active, badge }) => {
  return (
    <div className={`sidebar-item ${active ? "active" : ""}`}>
      <div className="sidebar-item-content">
        {icon}
        <span>{label}</span>
      </div>
      {badge && <span className="sidebar-badge">{badge}</span>}
    </div>
  );
};

export default Sidebar;
