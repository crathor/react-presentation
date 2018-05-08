import React from 'react';
import Logo from './SurreyCodeCampLogoNew.svg';
import './Header.css';

const Header = props => {
  return(
    <div onKeyDown={props.changeSlide} className="Header">
      <img className='Header-logo' src={Logo} alt="Surrey Codes"></img>
      <div>
        <h1>SurreyCodes</h1>
        <h1 id='Header-topic'>React Presentation</h1>
        <h1>{props.slideNumber === 0 ? 'Welcome' : `Slide: ${props.slideNumber}`}</h1>
      </div>
    </div>

  );
}

export default Header;
