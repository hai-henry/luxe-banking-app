import React from 'react';
import networth_graph from '../../assets/networth_graph.png';
import './info.css';

const Info = () => {
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
        // TODO: Improve the styling for adding other accounts, code will get
        crowded
        <div className="info__linked-account">
          <div className="info__linked-account-label">
            <p className="info__account-label-title">SAVINGS - 6868</p>
            <p className="info__account-label-id">Personal Savings</p>
          </div>
          <div className="info__linked-account-balance">
            <p className="info__account-balance-value">$25,759.72</p>
            <p className="info__account-balance-label">Current Balance</p>
          </div>
          <div className="info__linked-account-apy">
            <p className="info__account-balance-value">4.40%</p>
            <p className="info__account-balance-label">
              Annual Percentage Yield
            </p>
          </div>
          <button className="info__linked-account-button">Transfer</button>
        </div>
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
