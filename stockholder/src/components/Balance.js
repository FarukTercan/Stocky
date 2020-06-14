import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  // Reach global state
  const { transactions } = useContext(GlobalContext);

  // Calculate balance
  const amounts = transactions.map((transaction) => transaction.amount);

  console.log(amounts);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // Sign
  const sign = total < 0 ? '-' : '';

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 className={total < 0 ? 'minus' : 'plus'}>
        {sign}${Math.abs(total)}
      </h1>
    </div>
  );
};
