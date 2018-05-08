import React from 'react';
import './Bibliography.css';

const Bibliography = ( props ) => {
  return (
    <div className='Bibliography'>
      <p>To get started head over to <br /><a href="https://github.com/crathor/react-workshop-todo-app">https://github.com/crathor/react-workshop-todo-app</a><br />and clone the repository.</p>
      <h2>Bibliography</h2>
      <p>React Docs:
        <a href="https://reactjs.org/docs/hello-world.html">https://reactjs.org/docs/hello-world.html
        </a>
      </p>
      <p>React Docs:
        <a href="https://reactjs.org/">https://reactjs.org/</a>
      </p>
    </div>
  );
};

export default Bibliography;
