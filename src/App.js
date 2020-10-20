import React, { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

function App() {
  const [ usernameState, setUsernameState ] = useState('PizzaBoy2014');

  const usernameHandler = (event) => {
    setUsernameState(event.target.value);
  }

  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <UserInput inputUsername={usernameHandler} />
      <UserOutput username1="PrincessChloe2017" username2={usernameState} />
      <UserOutput username1="Username 3" username2="Username 4" />
    </div>
  );
}

export default App;
