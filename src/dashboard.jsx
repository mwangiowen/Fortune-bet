import { useState } from "react";
import SportsBetting from "./sportsbetting";
import Casino from "./casino"; 
import "./all.css"; 

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("sports");

  const renderContent = () => {
    switch (selectedTab) {
      case "sports":
        return <SportsBetting />;
      case "casino":
        return <Casino />;
      default:
        return <h2 className="text-center">Select an option</h2>;
    }
  };

  return (
    <div className="flex h-screen bg-[#0D0D1A] text-white">
      {/* Sidebar */}
      <div className="sidebar">
        <h1 className="sidebar-title">FortuneBet</h1>
        <ul className="sidebar-list space-y-4">
          <li>
            <button
              className={`sidebar-button ${selectedTab === "sports" ? "active" : ""}`}
              onClick={() => setSelectedTab("sports")}
            >
              Sports
            </button>
          </li>
          <li>
            <button
              className={`sidebar-button ${selectedTab === "casino" ? "active" : ""}`}
              onClick={() => setSelectedTab("casino")}
            >
              Casino
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
