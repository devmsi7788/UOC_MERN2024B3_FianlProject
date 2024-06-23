import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameCard from '../../componets/GameCard'; 
import Navigation from '../../componets/NavBar';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const games = [
    {
      id: 'NumberGuess',
      title: 'Guess the Number',
      description: 'Test your luck and intuition in this thrilling game of numbers! Guess the secret number between 1 and 10, and if you guess right, you win!',
      image: 'https://i.postimg.cc/xTYT6D0g/number.webp',
      details: 'In Guess the Number, you will have the chance to test your luck and intuition by guessing a secret number chosen randomly by the system. If your guess matches the hidden number, you win! But be careful, you only have one chance to guess!',
      isAvailable: true,
    },
    {
      id: 2,
      title: 'Space Odyssey',
      description: 'Blast off into outer space and explore the cosmos in your own spacecraft. Encounter alien civilizations, discover new planets, and engage in thrilling space battles!',
      image: 'https://i.postimg.cc/y8p16D0r/space.jpg',
      details: 'Space Odyssey takes you on a cosmic adventure through the vast reaches of space. As a daring space explorer, you will navigate your spaceship through asteroid fields, explore distant planets, and encounter strange extraterrestrial life forms. Battle rival space fleets, uncover ancient alien artifacts, and unlock the secrets of the universe as you journey to the farthest reaches of the galaxy!',
    },
    {
      id: 3,
      title: 'Fantasy Clash',
      description: 'Enter a world of magic and mayhem where wizards, warriors, and mythical creatures clash in epic battles. Choose your faction, master powerful spells, and conquer the realm!',
      image: 'https://i.postimg.cc/fb3wVMKW/fantasy.jpg',
      details: 'Fantasy Clash brings mythical creatures to life in an epic struggle for dominance. Choose your side in the age-old conflict between the forces of light and darkness. As a mighty sorcerer or valiant knight, lead your armies into battle against fearsome dragons, ferocious orcs, and other legendary creatures. Harness the power of magic, forge powerful alliances, and shape the fate of the realm in this epic tale of heroism and adventure!',
    },
    {
      id: 4,
      title: 'Mystery Mansion',
      description: 'Explore a mysterious mansion filled with secrets, puzzles, and hidden treasures. Unravel the enigma of the mansion and uncover its dark past!',
      image: 'https://i.postimg.cc/s2t3Sb6Y/mystery.webp',
      details: 'In Mystery Mansion, you will step into the shoes of a seasoned detective tasked with solving the case of a lifetime. Explore the eerie corridors of the mansion, search for hidden clues, and unravel the secrets of its enigmatic inhabitants. But beware, for danger lurks around every corner, and not everything is as it seems...',
    },
    {
      id: 5,
      title: 'Pirate Plunder',
      description: 'Sail the high seas as a swashbuckling pirate captain! Plunder ships, search for buried treasure, and engage in thrilling naval battles!',
      image: 'https://i.postimg.cc/gJ8mK4Qf/pirate.jpg',
      details: 'Ahoy, matey! In Pirate Plunder, you will embark on a daring adventure across the seven seas. As a fearsome pirate captain, you will command your crew in search of untold riches and legendary treasures. Battle rival pirates, explore hidden islands, and uncover the mysteries of the ocean as you carve out your legend in the annals of piracy!',
    },
    {
      id: 6,
      title: 'Medieval Mayhem',
      description: 'Step into the shoes of a brave knight and embark on a quest to save the kingdom from dark forces. Battle dragons, rescue princesses, and restore peace to the land!',
      image: 'https://i.postimg.cc/yxKBpczW/medieval.jpg',
      details: 'Medieval Mayhem transports you to a world of chivalry and honor, where brave knights clash in epic battles for glory and honor. As a noble knight, you will embark on a quest to save the kingdom from the clutches of darkness. Battle fearsome dragons, rescue damsels in distress, and rally your allies to vanquish evil and restore peace to the realm!',
    },
    {
      id: 7,
      title: 'Cybernetic Conquest',
      description: 'Enter a futuristic world of cybernetic warfare and technological marvels. Pilot giant mechs, hack into enemy systems, and dominate the digital battlefield!',
      image: 'https://i.postimg.cc/J0Q8f01x/cyber.webp',
      details: 'Cybernetic Conquest thrusts you into a world of high-tech warfare, where advanced robots and artificial intelligence clash in a battle for supremacy. As a skilled pilot, you will command powerful mechs equipped with state-of-the-art weaponry and armor. Hack into enemy systems, deploy tactical drones, and outmaneuver your opponents as you fight to control the future of humanity!',
    },
    {
      id: 8,
      title: 'Wild West Showdown',
      description: 'Experience the thrill of the Wild West as a gunslinger seeking fame and fortune. Duel rival outlaws, rob trains, and become the fastest gun in the West!',
      image: 'https://i.postimg.cc/dQRJkH8C/wildwest.jpg',
      details: 'Yee-haw! In Wild West Showdown, you will journey back to the days of the frontier, where lawlessness and adventure await around every corner. As a skilled gunslinger, you will duel rival outlaws in epic showdowns, rob trains loaded with riches, and become a legend of the untamed wilderness. But beware, for danger lurks behind every cactus and tumbleweed in this lawless land!',
    },
    {
      id: 9,
      title: 'Underwater Odyssey',
      description: 'Dive into the depths of the ocean and explore a vibrant underwater world teeming with marine life. Discover hidden ruins, encounter exotic creatures, and unlock the secrets of the sea!',
      image: 'https://i.postimg.cc/sDVspYcN/underwater.jpg',
      details: 'Underwater Odyssey invites you to explore the wonders of the ocean depths, where mysteries and adventures await beneath the waves. Dive into coral reefs teeming with life, explore ancient shipwrecks filled with treasure, and encounter majestic creatures such as whales, dolphins, and sharks. But beware of the dangers that lurk in the deep, for not everything in the ocean is as friendly as it seems...',
    },
  ];

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
 // const [currentSlide, setCurrentSlide] = useState(0);

  if (!isAuthenticated) {
    navigate('/');
    return null;
  }

  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Move to the next slide
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Change '3' to the number of slides
  //   }, 1000); // Change the duration (in milliseconds) between slide transitions

  //   return () => clearInterval(interval); // Clean up interval on component unmount
  // }, []);

  return (
    <div style={{ position: 'relative' }}>
      <style>{`
        .image-slider {
          /* Add your image slider styles here */
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 13%;
          z-index: -1; /* Ensure the image slider stays behind other content */
        }
        .image-slider img {
          /* Define styles for the background images */
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensure the image covers the entire slider area */
          opacity: 0; /* Hide all images by default */
        }
        .image-slider img.active {
          opacity: 1; /* Show the active image */
        }
      `}</style>
      <Navigation numberOfNotifications={10} />
      {/* <div className="image-slider">
        {['number', 'fantasy', 'wildwest'].map((tag, index) => (
          <img
            key={index}
            src={`https://source.unsplash.com/300x200/?${tag}`}
            alt={tag}
            className={index === currentSlide ? 'active' : ''}
          />
        ))}
      </div> */}

      <div className="container mt-4">
  <div className="row">
    <div className="col-md-12 text-center" style={{
      backgroundColor: 'white',
      opacity: 0.8,
    }}>
      <h1 className="mt-5 mb-3">Welcome to the Game Hub!</h1>
      <p className="lead mb-4">Discover a world of exciting games and challenges.</p>
      <Link to="/home" className="btn btn-primary">
        Explore Games
      </Link>
    </div>
  </div>
  <div className="row mt-5">
    {games.map((game) => (
      <div key={game.id} className="col-md-4 mb-4">
        <GameCard game={game} />
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Home;
