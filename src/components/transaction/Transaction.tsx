import React from 'react';
import './transaction.css';

type TransactionProps = {
  logo: string;
  name: string;
  date: string;
  amount: string;
};

const Transaction: React.FC<TransactionProps> = ({
  logo,
  name,
  date,
  amount,
}) => {
  return (
    <div className="info__content-transaction-item">
      <img src={logo} alt={name} />
      <p>
        {name} - {date}
      </p>
      <p>{amount}</p>
    </div>
  );
};

export default Transaction;
