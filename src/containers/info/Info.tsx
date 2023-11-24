import React from 'react';
import networth_graph from '../../assets/networth_graph.png';
import './info.css';
import { Account } from '../../components';

const Info = () => {
  const savings_6868 = {
    type: 'Personal Savings',
    title: 'SAVINGS',
    id: 6868,
    balance: '25,759.72',
    apy: '4.40',
  };

  const checking_4578 = {
    type: 'Personal Checking',
    title: 'CHECKING',
    id: 4578,
    balance: '12,000.00',
  };

  const checking_8790 = {
    type: 'Personal Checking',
    title: 'CHECKING',
    id: 8790,
    balance: '18,911.64',
  };

  const investment_4747 = {
    type: 'Individual Investments',
    title: 'INVESTMENT',
    id: 4747,
    balance: '72,127.24',
  };

  const savings_5238 = {
    type: 'Personal Savings',
    title: 'SAVINGS',
    id: 5238,
    balance: '25,759.72',
    apy: '4.40',
  };

  return (
    <div className="info">
      <div className="info__content-left">
        <div className="info__main-container">
          <div className="info__graph-container">
            <div className="info__graph">
              <img src={networth_graph} alt="Net worth Graph" />
              <div className="info__graph-values">
                <p>$128,000</p>
                <p>$100,000</p>
              </div>
            </div>
            <div className="info__graph-months">
              <p>Oct 14</p>
              <p>Nov 14</p>
            </div>
          </div>
          <div className="info__net-worth-container">
            <div className="info__account">
              <p className="info__account-name">INDIVIDUAL</p>
              <p className="info__account-id">LX74897</p>
            </div>
            <div className="info__amount">
              <p className="info__amount-title">Net Worth</p>
              <p className="info__amount-value">$128,798.60</p>
            </div>
            <div className="info__change">
              <div className="info__change-dollar">
                <p className="info__change-name">Today's Change ($)</p>
                <p className="info__change-value">+596.71</p>
              </div>
              <div className="info__change-percent">
                <p className="info__change-name">Today's Change (%)</p>
                <p className="info__change-value">(0.46%) </p>
              </div>
            </div>
          </div>
        </div>
        <Account {...savings_6868} />
        <Account {...checking_4578} />
        <Account {...checking_8790} />
        <Account {...investment_4747} />
        <Account {...savings_5238} />
      </div>
      <div className="info__content-right">
        <div className="info__content-transactions-label">
          <p className="info__content-transactions-title">
            LATEST TRANSACTIONS
          </p>
          <p className="info__content-transactions-subtitle">
            Transaction History
          </p>
          <p>-------line here</p>
        </div>
        <div className="info__content-transaction-history">
          <div className="info__content-transaction-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Info;
