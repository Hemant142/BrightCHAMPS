import React from 'react';
import { motion } from 'framer-motion';
import Group156 from '../../Images/Group156.png';
import verctor7 from '../../Images/Vector7.png';
import Group148 from '../../Images/Group148.png';
import Rectangle160 from '../../Images/Rectangle160.png';
import Rectangle161 from '../../Images/Rectangle161.png';
import Rectangle162 from '../../Images/Rectangle162.png';
import PinkCard from '../../Images/pinkcard.png';
import AppleCard from '../../Images/applecard.png';
import Group41 from '../../Images/Group41.png';
import BlueCard from '../../Images/bluecard.png';
import Ellipse309 from '../../Images/Ellipse309.png';
import Ellipse310 from '../../Images/Ellipse310.png';
import Rectangle14 from '../../Images/Rectangle14.png';
import Group157 from '../../Images/Group157.png';
import Rectangle163 from '../../Images/Rectangle163.png';
import Button from '../../Components/Button';
import './Intro3.css';
import { useNavigate } from 'react-router-dom';

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Intro3: React.FC = () => {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate('/intro2');
  };

  const handlePlayClick = () => {
    navigate('/game');
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
      <motion.div className="Group148-154" variants={animationVariants}>
        <img src={Group148} alt="Group148" className="Group148" />
      </motion.div>
      <motion.img
        src={verctor7}
        alt="verctor7"
        className="verctor7"
        variants={animationVariants}
      />
      <div className="card-container">
        <motion.div className="rectangle-card" variants={animationVariants}>
          <img src={Rectangle160} alt="Rectangle160" className="Rectangle160" />
          <img src={PinkCard} alt="PinkCard" className="PinkCard" />
          <img src={AppleCard} alt="AppleCard" className="AppleCard" />
          <img src={Group41} alt="Group41" className="Group41" />
          <div className="text-on-rectangle">
            <h5 style={{ whiteSpace: 'nowrap' }}>Select a<br /> pink card.</h5>
          </div>
          <p className="text">It has Images</p>
        </motion.div>

        <motion.div className="rectangle-card" variants={animationVariants}>
          <img src={Rectangle161} alt="Rectangle161" className="Rectangle161" />
          <img src={BlueCard} alt="BlueCard" className="BlueCard" />
          <div className="Group14">
            <img src={Ellipse309} alt="Ellipse309" className="Ellipse309" />
            <img src={Rectangle14} alt="Rectangle14" className="Rectangle14" />
            <img src={Ellipse310} alt="Ellipse310" className="Ellipse310" />
            <h3 className="number-text">02</h3>
          </div>
          <div className="text-on-rectangle2">
            <h5 style={{ whiteSpace: 'nowrap' }}>Select a<br /> blue card.</h5>
          </div>
          <p className="text2">It has a alphabets</p>
        </motion.div>

        <motion.div className="rectangle-card" variants={animationVariants}>
          <img src={Rectangle162} alt="Rectangle162" className="Rectangle162" />
          <img src={Group157} alt="Group157" className="Group157" />
          <div className="Group163">
            <img src={Ellipse309} alt="Ellipse309" className="Ellipse309" />
            <img src={Rectangle163} alt="Rectangle163" className="Rectangle163" />
            <img src={Ellipse310} alt="Ellipse310" className="Ellipse310" />
            <h3 className="number-text">03</h3>
          </div>
          <p className="text3">If they are same</p>
          <div className="text-on-rectangle3">
            <h5 style={{ whiteSpace: 'nowrap' }}>Its a match !</h5>
          </div>
          <p className="text4">otherwise retry :(</p>
        </motion.div>
      </div>
      <motion.div className="button-container" variants={animationVariants}>
        <Button text={"Play"} onClick={handlePlayClick} />
      </motion.div>
    </motion.div>
  );
}

export default Intro3;
