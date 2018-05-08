import React from 'react';
import './StateAndProps.css';

const StateAndProps = props => {
  return(
    <div className='StateAndProps'>
      <div>
        <ul className='props-list'>
          <h3>Props</h3>
          <li>Short for properties</li>
          <li>Used to communicate between other components</li>
          <li>Can only flow downward. ie from a parent to a child</li>
          <li>are immutable (can not be changed)</li>
          <li>can be anything ie: String, Boolean, Function, Array, Object</li>
        </ul>
      </div>
      <div>
        <ul>
          <h3>State</h3>
          <li>Used to initialize a component or when it needs to receive data from somewhere other than it's parent element. ie: user input, API, etc</li>
          <li>tracks data in between renders</li>
          <li>is mutable through a built in React method call setState.</li>
          <li>everytime the state is changed it triggers a re-render of the component</li>
          <li>Can only flow downward. ie from a parent to a child via a prop</li>
          <li>can be anything ie: String, Boolean, Function, Array, Object</li>
        </ul>
      </div>
    </div>
  );
}

export default StateAndProps;
