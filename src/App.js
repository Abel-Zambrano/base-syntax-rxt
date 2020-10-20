import React, { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

function App() {
  const [ usernameState, setUsernameState ] = useState('PizzaBoy2014');

  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <UserInput />
      <UserOutput username1="PrincessChloe2017" username2={usernameState} />
    </div>
  );
}

export default App;
