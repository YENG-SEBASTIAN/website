// MousePointerWave.jsx

import React, { useState, useEffect } from 'react';
import './MousePointerWave.css';

const MousePointerWave = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="circle-wave" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
  );
};

export default MousePointerWave;
