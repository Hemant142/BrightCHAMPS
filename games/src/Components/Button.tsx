import React from 'react';
import './Button.css';
import Polygon1 from '../Images/Polygon1.png';
import Rectangle15 from '../Images/Rectangle15.png';
import Ellipse3 from '../Images/Ellipse3.png';
import Ellipse312 from '../Images/Ellipse312.png';

interface ButtonProps {
  width?: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ width, text, onClick }) => {
  return (
    <div className="button-container" style={{ width }}>
      <div className="rectangle13">
        <button className="start-button" onClick={onClick}>
          <img src={Rectangle15} alt="Rectangle" className="rectangle15-image" />
          <img src={Ellipse3} alt="Ellipse3" className="ellipse3-image" />
          <img src={Ellipse312} alt="Ellipse312" className="ellipse312-image" />
          <span className="start-button-text">{text}</span>
        </button>
      </div>
      <div className="polygon1">
        <img src={Polygon1} alt="Polygon" className="polygon-image" />
      </div>
    </div>
  );
}

export default Button;
