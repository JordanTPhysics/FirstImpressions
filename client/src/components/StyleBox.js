import React, { useState, useEffect, useRef } from 'react';
import './StyleBox.css';
import '../App.css';

export default function StyleBox({ text, title }) {
  const outerRectRef = useRef(null);

  const [isMouseInside, setIsMouseInside] = useState(false);
  const [innerRectSize, setInnerRectSize] = useState({ width: 30, height: outerRectRef.current?.clientHeight }); 

  const handleMouseEnter = () => {
    setIsMouseInside(true);
    setInnerRectSize({ width: outerRectRef.current?.clientWidth, height: outerRectRef.current?.clientHeight});
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
    setInnerRectSize({ width: 0, height: outerRectRef.current?.clientHeight});

  };


  return (
    <div className="outer-rect"
      ref={outerRectRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ><h3>{title}</h3>
      <h4>{text}</h4>
      <div className="inner-rect"
        style={{
          width: isMouseInside ? `${innerRectSize.width}px` : '0',
          height: `${2 * outerRectRef.current?.clientHeight / 3}px`,
        }}
      ></div>
            <div className="inner-rect"
        style={{
          width: isMouseInside ? `${innerRectSize.width * 0.75}px` : '0',
          height: `${outerRectRef.current?.clientHeight}px`,
        }}
      ></div>
    </div>
  );
}
