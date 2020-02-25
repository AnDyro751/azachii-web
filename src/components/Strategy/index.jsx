/* eslint-disable react/no-array-index-key */
import React from 'react';
import Item from '../Tools/Item';
import items from './items';
import styles from './style.module.css';

function Strategy() {
  return (
    <div className="row justify-content-center">
      <div className="col-11 col-lg-10 u__no_padding">
        <div className="row u__no_margin justify-content-center">
          <h2 className={styles.strategy_title}>
            Estrategia
          </h2>
        </div>
        <div className="row u__no_margin justify-content-center">
          {items.map((data, index) => (
            <Item tool={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Strategy;
