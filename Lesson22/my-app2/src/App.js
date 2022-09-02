import logo from './logo.svg';
import './App.css';
import hello from './hello.jpeg';
import React from 'react';


const helloSyle = {
  image: {
    width: '400px',
  },
  frame: {
    border: "1px solid white"
  }
}



function Hello (props) {
  return (
    <div style={helloSyle.frame}>
      <h1>Привітання!</h1>
      <img src={props.image} style={helloSyle.image} alt="logo" />
    </div>
  )
}

class Hi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {date: new Date()};
  }
  render () {
    return (
      <div style={helloSyle.frame}>
      <h1>Привітання!</h1>
      <img src={this.props.image} style={helloSyle.image} alt="logo" />
      <h3>Сьогодні {this.state.date.toLocaleDateString()}.</h3>
    </div>
    )
   
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Hello image={hello}/>
        <Hi image={hello}></Hi>
      </header>
    </div>
  );
}

export default App;
