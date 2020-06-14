import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const GainAndLoss = () => {
  // Reach global state
  const { transactions } = useContext(GlobalContext);

  // Calculate gain & loss
  const amounts = transactions.map((transaction) => transaction.amount);

  const gain = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const loss = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Gain</h4>
        <p className='money plus'>{gain}</p>
      </div>
      <div>
        <h4>Loss</h4>
        <p className='money minus'>{loss} </p>
      </div>
    </div>
  );
};
