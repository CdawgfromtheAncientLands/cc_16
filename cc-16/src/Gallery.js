import React, { useState } from 'react';
import { masterArray } from './data';
import Profile from './Profile';
import './Gallery.css';

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % masterArray.length);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + masterArray.length) % masterArray.length);
  };

  const [name, role, picture] = masterArray[index];

  return (
    <div className="gallery-container">
      <button onClick={handlePrevious} className="arrow left">←</button>
      <div className="gallery">
        <Profile name={name} role={role} picture={picture} />
      </div>
      <button onClick={handleNext} className="arrow right">→</button>
    </div>
  );
};

export default Gallery;