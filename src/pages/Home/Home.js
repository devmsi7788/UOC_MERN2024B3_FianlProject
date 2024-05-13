import React from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../../componets/GameCard/GameCard'; // Assuming GameCard component is in the correct directory
import './Home.css';

const Home = () => {
    const games = [
        {
            id: 1,
            title: 'Adventure Quest',
            description: 'Embark on an epic journey through mystical lands filled with danger and treasure. Gather your party and explore dungeons, defeat powerful foes, and become the hero of legend!',
            image: 'https://source.unsplash.com/300x200/?adventure',
          },
          {
            id: 2,
            title: 'Space Odyssey',
            description: 'Blast off into outer space and explore the cosmos in your own spacecraft. Encounter alien civilizations, discover new planets, and engage in thrilling space battles!',
            image: 'https://source.unsplash.com/300x200/?space',
          },
          {
            id: 3,
            title: 'Fantasy Clash',
            description: 'Enter a world of magic and mayhem where wizards, warriors, and mythical creatures clash in epic battles. Choose your faction, master powerful spells, and conquer the realm!',
            image: 'https://source.unsplash.com/300x200/?fantasy',
          },
          {
            id: 4,
            title: 'Mystery Mansion',
            description: 'Explore a mysterious mansion filled with secrets, puzzles, and hidden treasures. Unravel the enigma of the mansion and uncover its dark past!',
            image: 'https://source.unsplash.com/300x200/?mystery',
          },
          {
            id: 5,
            title: 'Pirate Plunder',
            description: 'Sail the high seas as a swashbuckling pirate captain! Plunder ships, search for buried treasure, and engage in thrilling naval battles!',
            image: 'https://source.unsplash.com/300x200/?pirate',
          },
          {
            id: 6,
            title: 'Medieval Mayhem',
            description: 'Step into the shoes of a brave knight and embark on a quest to save the kingdom from dark forces. Battle dragons, rescue princesses, and restore peace to the land!',
            image: 'https://source.unsplash.com/300x200/?medieval',
          },
          {
            id: 7,
            title: 'Cybernetic Conquest',
            description: 'Enter a futuristic world of cybernetic warfare and technological marvels. Pilot giant mechs, hack into enemy systems, and dominate the digital battlefield!',
            image: 'https://source.unsplash.com/300x200/?cyber',
          },
          {
            id: 8,
            title: 'Wild West Showdown',
            description: 'Experience the thrill of the Wild West as a gunslinger seeking fame and fortune. Duel rival outlaws, rob trains, and become the fastest gun in the West!',
            image: 'https://source.unsplash.com/300x200/?wildwest',
          },
          {
            id: 9,
            title: 'Underwater Odyssey',
            description: 'Dive into the depths of the ocean and explore a vibrant underwater world teeming with marine life. Discover hidden ruins, encounter exotic creatures, and unlock the secrets of the sea!',
            image: 'https://source.unsplash.com/300x200/?underwater',
          },
          {
            id: 10,
            title: 'Alien Invasion',
            description: 'Defend Earth from an alien invasion as a fearless space marine. Battle hordes of extraterrestrial foes, pilot advanced spacecraft, and save humanity from annihilation!',
            image: 'https://source.unsplash.com/300x200/?alien',
          },
      ];
      
      

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="mt-5 mb-3">Welcome to the Game Hub!</h1>
          <p className="lead mb-4">Discover a world of exciting games and challenges.</p>
          <Link to="/games" className="btn btn-primary">
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
  );
};

export default Home;
