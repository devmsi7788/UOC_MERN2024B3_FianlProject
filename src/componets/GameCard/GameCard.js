import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <div className="card">
      <img src={game.image} className="card-img-top" alt={game.title} />
      <div className="card-body">
        <h5 className="card-title">{game.title}</h5>
        <p className="card-text">{game.description}</p>
        <Link to={`/games/${game.id}`} className="btn btn-primary">
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
