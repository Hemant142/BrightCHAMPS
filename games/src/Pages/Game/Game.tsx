import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Group156 from '../../Images/Group156.png';
import BlueCard from '../../Images/bluecard.png';
import PinkCard from '../../Images/pinkcard.png';
import Apple from '../../Images/Apple.png';
import Orange from '../../Images/orange.png';
import Grapes from '../../Images/grapes.png';
import Watermelon from '../../Images/watermelon.png';
import Strawberry from '../../Images/strawberry.png';
import Cherry from '../../Images/cherry.png';
import './Game.css';
import Rewards from '../Rewards/Rewards';

const fruits = [
  { name: 'Apple', image: Apple, letter: 'A' },
  { name: 'Orange', image: Orange, letter: 'O' },
  { name: 'Grapes', image: Grapes, letter: 'G' },
  { name: 'Watermelon', image: Watermelon, letter: 'W' },
  { name: 'Strawberry', image: Strawberry, letter: 'S' },
  { name: 'Cherry', image: Cherry, letter: 'C' },
];

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Game: React.FC = () => {
  const [selectedFruit, setSelectedFruit] = useState<string | null>(null);
  const [selectedBlueCard, setSelectedBlueCard] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [showLetter, setShowLetter] = useState(false);
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate('/intro3');
  };

  const handlePinkCardClick = (fruitName: string) => {
    setSelectedFruit(fruitName);
  };

  const handleBlueCardClick = (letter: string) => {
    setSelectedBlueCard(letter);
  };

  useEffect(() => {
    if (selectedBlueCard && selectedFruit) {
      const fruit = fruits.find(f => f.name === selectedFruit);
      setShowLetter(true);

      if (fruit?.letter === selectedBlueCard) {
        if (!matchedCards.includes(selectedFruit) && !matchedCards.includes(selectedBlueCard)) {
          setTimeout(() => {
            setScore(score + 1);
            setMatchedCards([...matchedCards, selectedFruit, selectedBlueCard]);
            setShowLetter(false);
            setSelectedFruit(null);
            setSelectedBlueCard(null);
          }, 1000); // Increase score and hide cards after 1 second
        }
      } else {
        if (!matchedCards.includes(selectedFruit) && !matchedCards.includes(selectedBlueCard)) {
          setTimeout(() => {
            setScore(score - 1);
            setShowLetter(false);
            setSelectedFruit(null);
            setSelectedBlueCard(null);
          }, 1000); // Decrease score and hide cards after 1 second
        }
      }
    }
  }, [selectedBlueCard, selectedFruit, score, matchedCards]);

  const progressBarStyle = {
    width: `${(score / fruits.length) * 100}%`,
    height: '10px',
    backgroundColor: 'rgba(252, 228, 146, 1)',
    transition: 'width 0.3s ease-in-out', // Add transition effect
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      className="background-container"
    >
      <motion.div
        className="arrow"
        onClick={handleArrowClick}
        variants={animationVariants}
      >
        <img src={Group156} alt="Group156" className="arrow-image" />
      </motion.div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={progressBarStyle}></div>
      </div>
      <div className="cards-container">
        <div className="pink-cards">
          {fruits.map((fruit, index) => (
            <motion.div
              key={index}
              className="card"
              onClick={() => handlePinkCardClick(fruit.name)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              variants={animationVariants}
            >
              {!matchedCards.includes(fruit.name) && selectedFruit === fruit.name && (
                <img src={fruit.image} alt={fruit.name} className="fruit-image" />
              )}
              {!matchedCards.includes(fruit.name) && (
                <img src={PinkCard} alt="Pink Card" />
              )}
            </motion.div>
          ))}
        </div>
        <div className="blue-cards">
          {fruits.map((fruit, index) => (
            <motion.div
              key={index}
              className="card"
              onClick={() => handleBlueCardClick(fruit.letter)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              variants={animationVariants}
            >
              {!matchedCards.includes(fruit.letter) && (
                <>
                  <img src={BlueCard} alt="Blue Card" />
                  {showLetter && selectedBlueCard === fruit.letter && (
                    <div className="letter">{fruit.letter}</div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      {matchedCards.length === fruits.length * 2 && (
        <>
          <div className="overlay"></div>
          <Rewards score={score} />
        </>
      )}
      <motion.div className="button-container" variants={animationVariants}>
        <div className="score">Score: {score}</div>
      </motion.div>
    </motion.div>
  );
};

export default Game;
