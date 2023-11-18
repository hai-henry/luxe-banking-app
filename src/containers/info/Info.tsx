import React from 'react';
import networth_graph from '../../assets/networth_graph.png';
import './info.css';

const Info = () => {
  return (
    <div className="info">
      <div className="info__content">
        <div className="info__content-left">
          <div className="info__graph-container">
            <div className="info__net-worth-graph">
              <img src={networth_graph} alt="Net worth Graph" />
              <div className="info__net-worth-graph-values">
                <p>$128,000</p>
                <p>$100,000</p>
              </div>
            </div>
            <div className="info__net-worth-graph-months">
              <p>Oct 14</p>
              <p>Nov 14</p>
            </div>
          </div>
        </div>
        <div className="info__content_right">
          <h1>Right side info</h1>
        </div>
      </div>
    </div>
  );
};

export default Info;
