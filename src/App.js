import React, { Component } from 'react';
import Header from './components/Header/Header';
import Slide from './components/Slide/Slide';
import Intro from './components/Intro/Intro';
import Jsx from './components/Jsx/Jsx';
import Bibliography from './components/Bibliography/Bibliography';
import HandleEvents from './containers/HandleEvents/HandleEvents';
import Components from './containers/Components/Components';
import StateAndProps from './components/StateAndProps/StateAndProps';
import Lifecycle from './components/Lifecycle/Lifecycle';
import TableOfContents from './components/TableOfContents/TableOfContents';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideNumber: 0,
      topics: ['Table of Contents','Welcome to React', 'Understanding JSX', 'Components', 'State and Props', 'Handling Events', 'Lifecycle', 'Lets Build a simple TODO List APP!']
    };
  }
  componentDidMount(){
    document.addEventListener("keydown", this.handleKey, false);
  }
  handleKey = e => {
    if(e.code === 'ArrowLeft'){
      this.prevSlide();
    }
    if(e.code === 'ArrowRight') {
      this.nextSlide();
    }
  }
  prevSlide = () => {
    let slideNumber = this.state.slideNumber;
    slideNumber--;
    if (slideNumber < 0) {
      slideNumber = 0;
    }
    this.setState({slideNumber: slideNumber});
  }
  nextSlide = () => {
    let slideNumber = this.state.slideNumber;
    slideNumber++;
    if (slideNumber > 7) {
      slideNumber = 7;
    }
    this.setState({slideNumber: slideNumber});
  }
  render() {
    let component;
    switch (this.state.slideNumber) {
      case 0:
        component = <TableOfContents table={this.state.topics}/>
        break;
      case 1:
        component = <Intro />
        break;
      case 2:
        component = <Jsx />
        break;
      case 3:
        component = <Components />
        break;
      case 4:
        component = <StateAndProps />
        break;
      case 5:
        component = <HandleEvents />
        break;
      case 6:
        component = <Lifecycle />
        break;
      case 7:
        component = <Bibliography />
        break;
      default:

    }
    return (
      <div className="App">
        <Header slideNumber={this.state.slideNumber} />
        <Slide title={this.state.topics[this.state.slideNumber]} component={component} />
      </div>
    );
  }
}

export default App;

// <Header slideNumber={this.state.slideNumber} />
