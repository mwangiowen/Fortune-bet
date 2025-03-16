import "./all.css";

const casinoGames = [
  {
    name: "Blackjack",
    image: "https://example.com/blackjack.png",
  },
  {
    name: "Roulette",
    image: "https://example.com/roulette.png",
  },
  {
    name: "Poker",
    image: "https://example.com/poker.png",
  },
  {
    name: "Slots",
    image: "https://example.com/slots.png",
  },
];

const Casino = () => {
  return (
    <div className="casino-container">
      <h2 className="casino-title">Casino Games</h2>
      <div className="casino-grid">
        {casinoGames.map((game, index) => (
          <div key={index} className="casino-card">
            <img src={game.image} alt={game.name} className="casino-image" />
            <h3 className="casino-game-title">{game.name}</h3>
            <button className="casino-play-button">Play Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Casino;
