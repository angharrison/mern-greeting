import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
  }
  queryQuote(e) {
    e.preventDefault()
    fetch('http://quotes.rest/qod.json', {
      headers: {
        'Accept': 'application/json'
    }
  })
    .then((response) => {
      response.json().then((data) => {
       this.setState({ quote: data })
     })
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button type='submit' onClick={this.queryQuote.bind}>Get Quote</button>
      </div>
    )
  }
}

export default App
