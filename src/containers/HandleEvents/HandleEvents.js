import React, { Component } from 'react';
import './HandleEvents.css';
import StateAndFunc from './StateAndFunctions.png';
import HandleEventElements from './HandleEvent.png';

class HandleEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: null,
      text: 'This div contains an onChange event that changes the writing inside this element!',
      showText: false
    };
  }
  changeBackground = () => {
    this.setState({background: 'blue'});
  }
  changeText = (event) => {
    const text = event.target.value;
    this.setState({text: text})
  }
  showText = (hide) => {
    if (hide === 'show'){
      this.setState({showText: true});
    } else {
      this.setState({showText: false});
    }
  }
  render(){
    let firstStyle = {
      background: this.state.background
    };
    return(
      <div className='HandleEvents'>
        <p className='statement'>Handling events in React is done a little different. React uses camelCase rather than lowercase and instead of passing a string you pass a function. Below are a few examples of events and how they are written using React with JSX.</p>
        <div className='event-div-wrapper'>
          <div style={firstStyle} className='event-div' onClick={this.changeBackground}>
            <h3>onClick</h3>
            <p>
              This div has an onClick event that changes it's background color to blue!
            </p>
          </div>
          <div className='event-div'>
            <h3>onChange</h3>
            <p>
              {this.state.text}
            </p>
            <textarea type='text' rows='3' onChange={this.changeText} value={this.state.text}></textarea>
          </div>
          <div onMouseEnter={(hide) => this.showText('show')} onMouseLeave={(hide) => this.showText('hide')} className='event-div'>
            <h3>onMouseEnter/onMouseLeave</h3>
            <p>
              This div has an onMouseEnter event that shows more text below and an onMouseLeave to hide it again.
              {this.state.showText ? ' More text as promised! Got to love React!!' : null}
            </p>
          </div>
        </div>
        <div className='images-container'>
          <img src={StateAndFunc} alt=""></img>
          <img src={HandleEventElements} alt=""></img>
        </div>
      </div>
    );
  }
}

export default HandleEvents;
