import React from 'react';

import MonkeyImage from '../Images/Monkey.png';
import './Intro.css';

export default function Intro() {
  return (
    <div className="background-container">
      <img src={MonkeyImage} alt="Monkey" className="monkey-image" />
    </div>
  );
}
