import React, { useState } from 'react';
import { masterArray } from './data';
import Profile from './Profile';
import './Gallery.css'; //once again, later

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
    <div className="gallery">
      <button onClick={handlePrevious} className="arrow left">←</button>
      <Profile name={name} role={role} picture={picture} />
      <button onClick={handleNext} className="arrow right">→</button>
    </div>
  );
};

export default Gallery;