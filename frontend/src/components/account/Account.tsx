import React from 'react';
import './account.css';

type AccountProps = {
  type: string;
  title: string;
  id: number;
  balance: string;
  apy?: string;
  className?: string;
};

const Account: React.FC<AccountProps> = ({
  type,
  title,
  id,
  balance,
  apy,
  className,
}) => {
  return (
    <div className="info__linked-account">
      <div className="info__linked-account-label">
        <p className="info__account-label-title">
          {title} - {id}
        </p>
        <p className="info__account-label-id">{type}</p>
      </div>
      <div className={`info__linked-account-balance ${className}`}>
        <p className="info__account-balance-value">${balance}</p>
        <p className="info__account-balance-label">Current Balance</p>
      </div>
      {apy ? (
        <div className="info__linked-account-apy">
          <p className="info__account-balance-value">{apy}%</p>
          <p className="info__account-balance-label">Annual Percentage Yield</p>
        </div>
      ) : (
        <div className="info__linked-account-apy-empty"></div>
      )}
      <button className="info__linked-account-button">Transfer</button>
    </div>
  );
};

export default Account;
