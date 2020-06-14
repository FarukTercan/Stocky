import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { GainAndLoss } from './components/GainAndLoss';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider, GlobalContext } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <GainAndLoss />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
