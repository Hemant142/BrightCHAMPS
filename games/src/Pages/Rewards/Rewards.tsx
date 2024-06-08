import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Rewards.css';
import Rectangle144 from '../../Images/Rectangle144.png';
import Group146 from '../../Images/Group146.png';
import Group665 from '../../Images/Group665.png';

interface RewardsProps {
  score: number;
}

const Rewards: React.FC<RewardsProps> = ({ score }) => {
  const navigate = useNavigate();

  const handleContainerClick = () => {
    navigate('/');
  };

  return (
    <div className="rewards-container" onClick={handleContainerClick}>
      <img src={Rectangle144} alt="Rectangle144" className="rectangle-image" />
      <img src={Group146} alt="Group146" className="group146-image" />
      <div className="score-text">
        Earned
        <div className="score">{score} Bananas</div>
      </div>
      <img src={Group665} alt="Group665" className="group665-image" />
      {/* <div className="rewards-text">Rewards</div> */}
    </div>
  );
};

export default Rewards;
