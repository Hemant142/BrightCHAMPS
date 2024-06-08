// import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Intro.css';
import MonkeyImage from '../../Images/Monkey.png';
import Ellipse310 from '../../Images/Ellipse310.png';
import Ellipse308 from '../../Images/Ellipse308.png';
import Ellipse307 from '../../Images/Ellipse307.png';
import Ellipse309 from '../../Images/Ellipse309.png';
import Group149 from '../../Images/Group149.png';
import Cog from '../../Images/Cog.png';
import Star from '../../Images/Star.png';
import Button from '../../Components/Button';
import { useEffect, useRef } from 'react';

const Intro = () => {
  const typedElement = useRef<HTMLSpanElement>(null); // Specify HTMLSpanElement as the type
  const navigate = useNavigate();

  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: ['Welcome Kiddo!'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: false,
        showCursor: false,
      };

      const typed = new Typed(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const handleStartClick = () => {
    navigate('/intro1');
  };

  return (
    <motion.div
      className="background-container"
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100vw' }}
    >
      <div className="ellipses-cogs-stars">
        <div className="ellipse308-309">
          <img src={Ellipse308} alt="Ellipse308" className="ellipse308" />
          <img src={Ellipse309} alt="Ellipse309" className="ellipse309" />
        </div>
        <div className="cog-star-container">
          <img src={Cog} alt="Cog" className="cog" />
          <img src={Star} alt="Star" className="star" />
        </div>
        <div className="ellipse307-310">
          <img src={Ellipse307} alt="Ellipse307" className="ellipse307" />
          <img src={Ellipse310} alt="Ellipse310" className="ellipse310" />
        </div>
      </div>
      <img src={MonkeyImage} alt="Monkey" className="monkey-image" />
      <div className="group149-container">
        <img src={Group149} alt="Group149" className="Group149" />
        <h1 className="heading">
          <span ref={typedElement}></span>
        </h1>
      </div>
      <div className="button-container">
        <Button text="Start" onClick={handleStartClick} />
      </div>
    </motion.div>
  );
};

export default Intro;
