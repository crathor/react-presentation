import React from 'react';
import './Intro.css';

const Intro = ( props ) => {
  return(
    <div className='Intro'>
   <p>
      React allows you to easily create dynamic UI's using:<br/><b><span>Components, State and Props, and JSX.</span></b><br/>It consists entirely of JavaScript allowing you to pass all kinds of data across different components.
   </p>
   <ul>
      <li>
        <h2>Components</h2>
         There are two different types of Components. Stateful components commonly reffered to as containers and stateless components. Both are interpreted the same way by React meaning it does not matter which one you use One however does include more features.
      </li>
      <li>
        <h2>State and Props</h2>
         State and Props are how react determines what to render and when. I will discuss this further in another slide. but for now just know that this is how data is stored and passed between components.
      </li>
      <li>
        <h2>JSX</h2>
         JSX looks like HTML but is in fact just some syntactic sugar to make React code easier to read. The next slide will go further into what is exactly happening when you write JSX.
      </li>
   </ul>
</div>

  );
}

export default Intro;
