import React from "react";
import { useSelector } from "react-redux";
import Transactionitem from "./TransactionItem";

const Balance = () => {
  const { balance, transactions } = useSelector((state) => state.account);
  return (
    <div>
      <h1>Account</h1>
      <h4>Your current balance:</h4>
      <p>{balance}</p>
      <h4>History:</h4>
      <ul>
        {transactions.map((transaction) => (
          <Transactionitem key={transaction.id} item={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default Balance;
