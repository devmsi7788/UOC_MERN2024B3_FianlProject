import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <img
        src={game.image}
        alt={game.title}
        style={{
          width: '100%',
          borderRadius: '8px',
        }}
      />
      <h3 style={{ fontSize: '1.5rem', marginTop: '10px', marginBottom: '5px' }}>{game.title}</h3>
      <p style={{ color: '#666', fontSize: '1rem' }}>{game.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        {game.isAvailable ? (
          <button className="btn btn-success" onClick={handlePlay}>
            Play Game
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
