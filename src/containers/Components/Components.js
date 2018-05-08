import React from 'react';
import ClassClip from './Class.png';
import FunctionalClip from './Functional.png';
import './Components.css';

class Components extends React.Component{
   state = {
      isContinued: false
   }
   togglePage = () => {
      this.setState(prevState => ({isContinued: !prevState.isContinued}));
   }
   render(){
      // STATEFUL COMPONENT WILL BE AN IMAGE
      let statefulComponent = <img src={ClassClip} alt=""></img>;
      let content =
          <div className='Component-wrapper'>
             <div>
               <h2>Stateful Component</h2>
               <p>Stateful components are sometimes referred to as containers. They are where the state of a component lives. It is also the only place where the state can be changed no other component should be allowed to change the state. This type of component contains extra features such as the state and lifecycles.</p>
              </div>
             <div>{statefulComponent}</div>
          </div>;

      if(this.state.isContinued){
         statefulComponent = <img src={FunctionalClip} alt=""></img>;
         content =
          <div className='Component-wrapper'>
            <div>
              <h2>Stateless Component</h2>
              <p>Stateless components are literally javascript functions. They receive props and render elements based on the data they receive. Stateless components cannot have a state. Whenever possible stateless components should be used to reduce the amount of components that can manipulate the state. This helps when applications become larger and states become much more work to maintain</p>
            </div>
             <div>{statefulComponent}</div>
          </div>;
      }
      return(
         <div className='Components'>
            <button onClick={this.togglePage}>{this.state.isContinued ? 'Stateful Components' : 'Stateless Components'}</button>
            {content}

         </div>
      )
   }
}

export default Components;
