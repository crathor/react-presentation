import React from 'react';
import './Slide.css';


const Slide = props => {
  return(
    <div className="Slide">
      <h1>
        {props.title}
      </h1>
      <div>
        {props.component}
      </div>
    </div>

  );
}

export default Slide;
