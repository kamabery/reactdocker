import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        {process.env.REACT_APP_SECRET_CODE}
        </p>
        <p>
          {process.env.REACT_APP_HOST_ENV}
        </p>
      </header>
    </div>
  );
}

export default App;
