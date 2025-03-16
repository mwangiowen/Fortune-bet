import { useState } from "react";
import "./all.css";

const sports = ["Soccer", "Tennis", "Basketball", "Cricket", "Ice Hockey", "Rugby", "Handball"];

const matchesData = {
  Soccer: [
    { teams: "Man Utd vs Chelsea", odds: { home: 2.1, draw: 3.4, away: 3.2 }, time: "20:00 GMT" },
    { teams: "Real Madrid vs Barcelona", odds: { home: 1.9, draw: 3.7, away: 3.5 }, time: "22:00 GMT" },
  ],
  Tennis: [
    { teams: "Nadal vs Djokovic", odds: { home: 1.8, away: 2.0 }, time: "14:00 GMT" },
    { teams: "Federer vs Medvedev", odds: { home: 2.3, away: 1.7 }, time: "16:30 GMT" },
  ],
  Basketball: [
    { teams: "Lakers vs Warriors", odds: { home: 1.7, away: 2.1 }, time: "02:00 GMT" },
    { teams: "Celtics vs Heat", odds: { home: 1.9, away: 2.0 }, time: "04:00 GMT" },
  ],
  Cricket: [
    { teams: "India vs Australia", odds: { home: 1.6, away: 2.4 }, time: "10:00 GMT" },
    { teams: "England vs Pakistan", odds: { home: 1.8, away: 2.2 }, time: "12:30 GMT" },
  ],
};

const SportsBetting = () => {
  const [selectedSport, setSelectedSport] = useState("Soccer");

  return (
    <div className="sports-container">
      <div className="sports-tabs">
        {sports.map((sport) => (
          <button
            key={sport}
            className={`sport-button ${selectedSport === sport ? "active" : ""}`}
            onClick={() => setSelectedSport(sport)}
          >
            {sport}
          </button>
        ))}
      </div>

      <div className="matches-container">
        <h2 className="text-xl font-semibold text-purple-400">{selectedSport} Matches</h2>
        {matchesData[selectedSport] ? (
          <div className="mt-4 space-y-4">
            {matchesData[selectedSport].map((match, index) => (
              <div key={index} className="match-card">
                <h3 className="match-title">{match.teams}</h3>
                <p className="match-time">⏰ {match.time}</p>
                <div className="odds-container">
                  {match.odds.home && (
                    <span className="odds-button odds-home">🏠 {match.odds.home}</span>
                  )}
                  {match.odds.draw && (
                    <span className="odds-button odds-draw">🔄 {match.odds.draw}</span>
                  )}
                  {match.odds.away && (
                    <span className="odds-button odds-away">🏃 {match.odds.away}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 mt-4">No matches available.</p>
        )}
      </div>
    </div>
  );
};

export default SportsBetting;
