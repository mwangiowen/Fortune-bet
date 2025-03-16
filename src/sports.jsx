import { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import SportsBetting from "./sportsbetting";
import "./all.css";

const sports = ["Soccer", "Tennis", "Basketball", "Cricket", "Ice Hockey", "Rugby", "Handball"];

const matches = [
  {
    league: "England EPL",
    team1: "Manchester Utd",
    team2: "Liverpool",
    team1Badge: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    team2Badge: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    odds1: 2.1,
    oddsX: 3.2,
    odds2: 1.8,
  },
  {
    league: "England EPL",
    team1: "Arsenal",
    team2: "Chelsea",
    team1Badge: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    team2Badge: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    odds1: 2.4,
    oddsX: 3.1,
    odds2: 2.0,
  },
  {
    league: "La Liga",
    team1: "Barcelona",
    team2: "Real Madrid",
    team1Badge: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    team2Badge: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    odds1: 2.0,
    oddsX: 3.0,
    odds2: 2.5,
  }
];

const TopMatch = () => {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="top-match">
      <h2 className="top-match-title">Top Match</h2>
      <div className="top-match-timer">
        <FaClock />
        <span>{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</span>
      </div>
      <button className="top-match-button">Place Bet</button>
    </div>
  );
};

const MatchCard = ({ match }) => (
  <div className="match-card">
    <h3 className="match-league">{match.league}</h3>
    <div className="match-teams">
      <div className="team-info">
        <img src={match.team1Badge} alt={match.team1} className="team-badge" />
        <span>{match.team1}</span>
      </div>
      <span className="font-bold">vs</span>
      <div className="team-info">
        <span>{match.team2}</span>
        <img src={match.team2Badge} alt={match.team2} className="team-badge" />
      </div>
    </div>
    <div className="odds-buttons">
      <button className="odds-button">{match.odds1}</button>
      <button className="odds-button">{match.oddsX}</button>
      <button className="odds-button">{match.odds2}</button>
    </div>
  </div>
);

const SportsDash = () => {
  const [selectedSport, setSelectedSport] = useState(null);

  return (
    <div className="sports-dash">
      <div className="sports-selection">
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

      {selectedSport ? (
        <SportsBetting selectedSport={selectedSport} />
      ) : (
        <>
          <div className="match-grid">
            {matches.map((match, index) => (
              <MatchCard key={index} match={match} />
            ))}
          </div>

          <TopMatch />
        </>
      )}
    </div>
  );
};

export default SportsDash;
