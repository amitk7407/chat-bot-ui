import React from 'react';
import logo from './logo.svg';
//import './App.css';
import ChatBot from './chat-bot'

function App() {
  return (
    <div style={{ backgroundColor: 'black', 'height': '100vh'}}>
      <div className="App-header">
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
      </div>
      <ChatBot />
    </div>
  );
}

export default App;
