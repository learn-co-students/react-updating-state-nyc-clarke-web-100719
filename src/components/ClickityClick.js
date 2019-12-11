// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      clickCount: 0
    };
  }

  
 
  handleClick = (e) => {
      this.setState({
          hasBeenClicked: !this.state.hasBeenClicked,
          clickCount: clickCount += 1
      })
    // Update our state here...
    console.log(e.target.value);
  };
 
  render() {
      console.log(this.state);
      
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;