import React, { useState } from 'react';
import './GameCard.css'; // Assuming GameCard styles are defined in GameCard.css

const GameCard = ({ game }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.description}</p>
      <div className="button-group">
        <button className="btn btn-success" onClick={() => alert(`Starting ${game.title}`)}>
          Play
        </button>
        <button className="btn btn-info" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'More Info'}
        </button>
      </div>
      {showDetails && (
        <div>
          <h4>Details:</h4>
          <p>{game.details}</p>
        </div>
      )}
    </div>
  );
};

export default GameCard;
