import React from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

function App() {
  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <UserInput />
      <UserOutput username="PrincessChloe2017" />
    </div>
  );
}

export default App;
