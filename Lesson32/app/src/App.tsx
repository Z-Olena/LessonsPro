import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';


interface HelloCmpI {
  name: string;

}

const HelloCmp: React.FC <HelloCmpI> = (props: HelloCmpI): ReactElement => {
  return (
    <p>Hello from TS{props.name}</p>
  )
}

function App() {
  return (
    <div className="App">
      <HelloCmp name=" Hillel"/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
