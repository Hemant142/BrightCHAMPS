import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import MonkeyImage from '../../Images/Monkey.png';
import Ellipse310 from '../../Images/Ellipse310.png';
import Ellipse308 from '../../Images/Ellipse308.png';
import Ellipse307 from '../../Images/Ellipse307.png';
import Ellipse309 from '../../Images/Ellipse309.png';
import Group149 from '../../Images/Group149.png';
import Group156 from '../../Images/Group156.png';
import Cog from '../../Images/Cog.png';
import Star from '../../Images/Star.png';
import Emoji from '../../Images/Emoji.png';
import Group148 from '../../Images/Group148.png';
import Button from '../../Components/Button';
import './Intro2.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Intro2: React.FC = () => {
  const typedElement = useRef(null);
  const [showBanana, setShowBanana] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      strings: [`Can you help me to get some? `],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: false,
      showCursor: false,
      onComplete: () => setShowBanana(true),
    };

    if (typedElement.current) {
      const typed = new Typed(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const handleArrowClick = () => {
    navigate('/intro1');
  };

  const handleYesClick = () => {
    navigate('/intro3');
  };

  return (
    <motion.div
      className="background-container"
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100vw' }}
    >
      <div className='arrow' onClick={handleArrowClick}>
        <img src={Group156} alt='Group156' className='arrow-image'/>
      </div>
      <div className='Group148-154'>
        <img src={Group148} alt='Group148' className='Group148'/>
      </div>
      <div className="ellipses-cogs-stars">
        <div className="ellipse308-309">
          <img src={Ellipse308} alt="Ellipse308" className="ellipse308" />
          <img src={Ellipse309} alt="Ellipse309" className="ellipse309" />
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
        <Button text={"Yes"} onClick={handleYesClick} />
      </div>
      {showBanana && <img src={Emoji} alt="Emoji" className="emoji-image" />}
    </motion.div>
  );
}

export default Intro2;
