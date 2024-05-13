import React, { useState } from 'react';
import './NumberGuess.css';

const NumberGuess = () => {
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuess = () => {
    const userGuess = parseInt(guess);

    if (userGuess === secretNumber) {
      setResult('Congratulations! You guessed the correct number!');
    } else {
      setResult(`Sorry, the correct number was ${secretNumber}. Better luck next time!`);
    }

    setIsGameOver(true);
  };

  const handleRetry = () => {
    setGuess('');
    setResult('');
    setSecretNumber(Math.floor(Math.random() * 10) + 1);
    setIsGameOver(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guess) {
      alert('Please make a guess before submitting.');
    } else {
      handleGuess();
    }
  };

  return (
    <div className="number-guess-card">
      <h2>Guess the Number</h2>
      <form onSubmit={handleSubmit}>
        <p>Guess a number between 1 and 10:</p>
        <input
          type="number"
          value={guess}
          onChange={handleInputChange}
          min="1"
          max="10"
          required
          disabled={isGameOver}
        />
        <button type="submit" disabled={isGameOver}>
          Guess
        </button>
      </form>
      {isGameOver && (
        <div>
          <p>{result}</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      )}
    </div>
  );
};

export default NumberGuess;
