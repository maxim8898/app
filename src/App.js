import React  from 'react';
import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
 

 
const  App = () => {

  const element = <FontAwesomeIcon icon={faCoffee} />
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { element }
      </div>
    );
  
};

export default App;
