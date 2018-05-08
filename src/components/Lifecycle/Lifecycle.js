import React from 'react';
import './Lifecycle.css';

const Lifecycle = () => {
  return(
    <div className='Lifecycle'>
         <p className='Lifecycle-description'>Lifecycles are built in methods for react that allow you to control what happens when your UI renders, updates or disappears all together.</p>
         <ul>
            <li>
               <h3>componentDidMount()</h3>
               <p>This method is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.</p>
            </li>
            <li>
               <h3>componentDidUpdate()</h3>
               <p>Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).</p>
            </li>
            <li>
               <h3>static getDerivedStateFromProps()</h3>
               <p>This method is invoked after a component is instantiated as well as when it receives new props. It should return an object to update state, or null to indicate that the new props do not require any state updates.</p>
            </li>
            <li>
               <h3>shouldComponentUpdate()</h3>
               <p>This method lets React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.</p>
            </li>
            <li>
               <h3>getSnapshotBeforeUpdate()</h3>
               <p>This method is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture current values (e.g. scroll position) before they are potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate()</p>
            </li>
            <li>
              <h3>componentWillUnmount()</h3>
              <p>This method is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount()</p>
            </li>
         </ul>
      </div>
  );
}

export default Lifecycle;
