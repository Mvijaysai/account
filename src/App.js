import React from 'react';
import logo from './logo.svg';
import './App.css';
import BalanceDisplay from "./BalanceDisplay";
import AccountActions from './AccountActions'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Redux Account</h1>
      </header>
      <BalanceDisplay/>
      <AccountActions/>
    </div>
  );
}

export default App;
