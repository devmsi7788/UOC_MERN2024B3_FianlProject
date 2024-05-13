import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom'; 
import './GameCard.css'; // Assuming GameCard styles are defined in GameCard.css

const GameCard = ({ game }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handlePlay = () => {
    if (game.isAvailable) {
      navigate(`/play/${game.id}`);
    } else {
      alert('This game is not available.');
    }
  };

  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.description}</p>
      <div className="button-group">
        {game.isAvailable ? (
          <button className="btn btn-success" onClick={handlePlay}>
            Play
          </button>
        ) : (
          <button className="btn btn-danger" disabled>
            Not Available
          </button>
        )}
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
