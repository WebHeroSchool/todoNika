import React from 'react';
import logo from './logo.svg';
import './App.css';

const salmon = '#fa8072';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: 'salmon'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          Hey you!
        </h1>
        <div>
          Im used for background color {salmon}
        </div>
        <div>
          {42}
        </div>
        <div>
          {41 + 1}
        </div>
        <div>
          {42 && '42'}
        </div>
        <div>
          {42 ? 42 : '42'}
        </div>
        <div>
          {undefined}
          {null}
          {false}
          {true}
        </div>
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
