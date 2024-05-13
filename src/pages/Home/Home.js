import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameCard from '../../componets/GameCard/GameCard'; // Assuming GameCard component is in the correct directory
import './Home.css';

const Home = () => {
  const games = [
    {
      id: 1,
      title: 'Adventure Quest',
      description: 'Embark on an epic journey through mystical lands filled with danger and treasure. Gather your party and explore dungeons, defeat powerful foes, and become the hero of legend!',
      image: 'https://source.unsplash.com/300x200/?adventure',
      details: 'In Adventure Quest, you will embark on a thrilling journey across the kingdom of Aragonia. As a brave adventurer, you will encounter mythical creatures, solve challenging puzzles, and uncover hidden treasures. Explore ancient ruins, dark forests, and treacherous mountains as you seek to fulfill your destiny and become the greatest hero the realm has ever known!',
    },
    {
      id: 2,
      title: 'Space Odyssey',
      description: 'Blast off into outer space and explore the cosmos in your own spacecraft. Encounter alien civilizations, discover new planets, and engage in thrilling space battles!',
      image: 'https://source.unsplash.com/300x200/?space',
      details: 'Space Odyssey takes you on a cosmic adventure through the vast reaches of space. As a daring space explorer, you will navigate your spaceship through asteroid fields, explore distant planets, and encounter strange extraterrestrial life forms. Battle rival space fleets, uncover ancient alien artifacts, and unlock the secrets of the universe as you journey to the farthest reaches of the galaxy!',
    },
    {
      id: 3,
      title: 'Fantasy Clash',
      description: 'Enter a world of magic and mayhem where wizards, warriors, and mythical creatures clash in epic battles. Choose your faction, master powerful spells, and conquer the realm!',
      image: 'https://source.unsplash.com/300x200/?fantasy',
      details: 'Fantasy Clash brings mythical creatures to life in an epic struggle for dominance. Choose your side in the age-old conflict between the forces of light and darkness. As a mighty sorcerer or valiant knight, lead your armies into battle against fearsome dragons, ferocious orcs, and other legendary creatures. Harness the power of magic, forge powerful alliances, and shape the fate of the realm in this epic tale of heroism and adventure!',
    },
    {
      id: 4,
      title: 'Mystery Mansion',
      description: 'Explore a mysterious mansion filled with secrets, puzzles, and hidden treasures. Unravel the enigma of the mansion and uncover its dark past!',
      image: 'https://source.unsplash.com/300x200/?mystery',
      details: 'In Mystery Mansion, you will step into the shoes of a seasoned detective tasked with solving the case of a lifetime. Explore the eerie corridors of the mansion, search for hidden clues, and unravel the secrets of its enigmatic inhabitants. But beware, for danger lurks around every corner, and not everything is as it seems...',
    },
    {
      id: 5,
      title: 'Pirate Plunder',
      description: 'Sail the high seas as a swashbuckling pirate captain! Plunder ships, search for buried treasure, and engage in thrilling naval battles!',
      image: 'https://source.unsplash.com/300x200/?pirate',
      details: 'Ahoy, matey! In Pirate Plunder, you will embark on a daring adventure across the seven seas. As a fearsome pirate captain, you will command your crew in search of untold riches and legendary treasures. Battle rival pirates, explore hidden islands, and uncover the mysteries of the ocean as you carve out your legend in the annals of piracy!',
    },
    {
      id: 6,
      title: 'Medieval Mayhem',
      description: 'Step into the shoes of a brave knight and embark on a quest to save the kingdom from dark forces. Battle dragons, rescue princesses, and restore peace to the land!',
      image: 'https://source.unsplash.com/300x200/?medieval',
      details: 'Medieval Mayhem transports you to a world of chivalry and honor, where brave knights clash in epic battles for glory and honor. As a noble knight, you will embark on a quest to save the kingdom from the clutches of darkness. Battle fearsome dragons, rescue damsels in distress, and rally your allies to vanquish evil and restore peace to the realm!',
    },
    {
      id: 7,
      title: 'Cybernetic Conquest',
      description: 'Enter a futuristic world of cybernetic warfare and technological marvels. Pilot giant mechs, hack into enemy systems, and dominate the digital battlefield!',
      image: 'https://source.unsplash.com/300x200/?cyber',
      details: 'Cybernetic Conquest thrusts you into a world of high-tech warfare, where advanced robots and artificial intelligence clash in a battle for supremacy. As a skilled pilot, you will command powerful mechs equipped with state-of-the-art weaponry and armor. Hack into enemy systems, deploy tactical drones, and outmaneuver your opponents as you fight to control the future of humanity!',
    },
    {
      id: 8,
      title: 'Wild West Showdown',
      description: 'Experience the thrill of the Wild West as a gunslinger seeking fame and fortune. Duel rival outlaws, rob trains, and become the fastest gun in the West!',
      image: 'https://source.unsplash.com/300x200/?wildwest',
      details: 'Yee-haw! In Wild West Showdown, you will journey back to the days of the frontier, where lawlessness and adventure await around every corner. As a skilled gunslinger, you will duel rival outlaws in epic showdowns, rob trains loaded with riches, and become a legend of the untamed wilderness. But beware, for danger lurks behind every cactus and tumbleweed in this lawless land!',
    },
    {
      id: 9,
      title: 'Underwater Odyssey',
      description: 'Dive into the depths of the ocean and explore a vibrant underwater world teeming with marine life. Discover hidden ruins, encounter exotic creatures, and unlock the secrets of the sea!',
      image: 'https://source.unsplash.com/300x200/?underwater',
      details: 'Underwater Odyssey invites you to explore the wonders of the ocean depths, where mysteries and adventures await beneath the waves. Dive into coral reefs teeming with life, explore ancient shipwrecks filled with treasure, and encounter majestic creatures such as whales, dolphins, and sharks. But beware of the dangers that lurk in the deep, for not everything in the ocean is as friendly as it seems...',
    },
    // Add more games with details as needed
  ];

  const numberOfNotifications = 10;

  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Navbar.Brand href="#home">Game Hub</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#games">Games</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#profile">Hi, Game User</Nav.Link>
          <Nav.Link href="#notifications">
         Msg
           <Badge pill variant="light" className="ml-1">{numberOfNotifications}</Badge>
          </Nav.Link>
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12 text-center">
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
