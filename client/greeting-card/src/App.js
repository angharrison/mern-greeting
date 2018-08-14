import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      to: ' ',
      from: ' ',
      message: ' '
    }
  }


  render() {
    return (
    <div className= "container1">
    <header className= "Greeting-header">
      <h2 className="Greeting-title">Reminders && Greetings</h2>
        <p className="exchange">to:
        <textarea rows="1" cols="15" placeholder="..."></textarea>
        from:<textarea rows="1" cols="15" placeholder="..."></textarea></p>
        <p> message: <textarea rows="2" cols="20" placeholder="Inscribe your love here"></textarea> </p>
        <button type="button">Send &hearts; </button>
          </header>
        </div>
    )
  }
}

export default App;
