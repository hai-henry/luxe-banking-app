import React from 'react';
import './transactionItem.css';

type TransactionProps = {
  logo: string;
  name: string;
  date: string;
  amount: string;
  isLiability?: boolean;
};

const TransactionItem: React.FC<TransactionProps> = ({
  logo,
  name,
  date,
  amount,
  isLiability = false,
}) => {
  const transactionItemClass = isLiability ? 'liability' : 'income';

  return (
    <div className="info__content-transaction-item">
      <img src={logo} alt={name} />
      <p>
        {name} - {date}
      </p>
      <p className={`${transactionItemClass}`}>{amount}</p>
    </div>
  );
};

export default TransactionItem;
