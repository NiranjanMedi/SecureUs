import './App.css';
import ReactDOM from 'react-dom';
import React, { useState, Component } from 'react';
import classNames from 'classnames';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleClick}>
        <div className="px-5 py-3 sm:m-3 lg:mx-10 bg-red-100 rounded-lg lg:h-96 sm:h-48 lg:w-64 sm:w-80%">{frontContent}</div>
      </div>
      <div onClick={handleClick}>
        <div className="card back px-5 py-3 sm:m-3 lg:mx-10 bg-red-100 rounded-lg lg:h-96 sm:h-48 lg:w-64 sm:w-80%">{backContent}</div>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;