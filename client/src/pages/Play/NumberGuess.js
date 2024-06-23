import React, { useState, useEffect, useContext } from 'react';
import Navigation from '../../componets/NavBar';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const NumberGuess = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [failedCount, setFailedCount] = useState(0);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  // Function to generate a random background image URL
  const getRandomBackgroundImage = () => {
    setBackgroundImage(`https://i.postimg.cc/13XSdyb0/numbeback.jpg`);
  };

  // Call the function to set a random background image when the component mounts
  useEffect(() => {
    getRandomBackgroundImage();
  }, []);

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuess = () => {
    const userGuess = parseInt(guess);

    if (userGuess === secretNumber) {
      setResult('Congratulations! You guessed the correct number!');
      setCorrectCount(correctCount + 1);
    } else {
      setResult(`Sorry, the correct number was ${secretNumber}. Better luck next time!`);
      setFailedCount(failedCount + 1);
    }

    setIsGameOver(true);
  };

  const handleRetry = () => {
    setGuess('');
    setResult('');
    setSecretNumber(Math.floor(Math.random() * 10) + 1);
    setIsGameOver(false);
    getRandomBackgroundImage(); // Change background image on retry
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guess) {
      alert('Please make a guess before submitting.');
    } else {
      handleGuess();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError(null);
    try {
        await axios.post(`http://localhost:5000/api/game/NumberGuessStatSv`, 
          { username: username, 
            wincount: correctCount, 
            failcount: failedCount}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        Swal.fire(
            'saved!',
            'Your Statistics has been saved.',
            'success'
        );
        navigate('/home');
    } catch (err) {
        console.error(err.response ? err.response.data : err.message);
        const errorMsg = err.response && err.response.data && err.response.data.msg 
            ? err.response.data.msg 
            : 'An error occurred. Please try again.';
        setError(errorMsg);
        Swal.fire(
            'Error!',
            'There was an error updating your Statistics.',
            'error'
        );
    }
}; 

  if (!isAuthenticated) {
    navigate('/login');
    return null;
}

  return (
    <div>
        <Navigation numberOfNotifications={5} />
        <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mt-5" style={{ paddingTop: '10%' }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={{ width: '300px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', opacity: isGameOver ? '1' : '0.88' }}>
              <div className="card-body">
                <div className="number-guess-card">
                  <h2 style={{ marginTop: '0', textAlign: 'center' }}>Guess the Number</h2>
                  <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
                    <p style={{ marginBottom: '10px' }}>Guess a number between 1 and 10:</p>
                    <input
                      type="number"
                      value={guess}
                      onChange={handleInputChange}
                      min="1"
                      max="10"
                      required
                      disabled={isGameOver}
                      style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', borderColor: isGameOver ? (guess === secretNumber ? 'green' : 'red') : '#ccc' }}
                    />
                    <button style={{ width: '100%', padding: '10px', marginBottom: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }} type="submit" disabled={isGameOver}>
                      Guess
                    </button>
                  </form>
                  {isGameOver && (
                    <div>
                      <p style={{ marginBottom: '10px' }}>{result}</p>
                      <button style={{ width: '100%', padding: '10px', marginBottom: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }} onClick={handleRetry}>Retry</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ width: '300px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <div className="card-body">
                <h3>Guess Statistics</h3>
                <p>Correct Guesses: {correctCount}</p>
                <p>Failed Guesses: {failedCount}</p>
              </div>
              <button style={{ width: '100%', padding: '10px', marginBottom: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }} onClick={handleSave}>
                Save Statistics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NumberGuess;
