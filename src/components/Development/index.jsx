/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import classnames from 'classnames';
import Item from './Item';
import ThemeContext from '../../contexts/Theme';
import items from './items';
import styles from './style.module.css';

function Development() {
  const { dark } = useContext(ThemeContext);

  const mainClass = classnames({
    'row justify-content-center': true,
    [styles.development]: true,
    black_color: dark,
  });
  const titleClass = classnames({
    [styles.development_title]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });

  return (
    <div className={mainClass}>
      <div className="col-11 col-lg-10 u__no_padding">
        <div className="row u__no_margin justify-content-center">
          <h2 className={titleClass}>
            Tecnología
          </h2>
        </div>
        <div className="row u__no_margin justify-content-center align-items-center">
          {items.map((data, index) => (
            <Item data={data} key={index} dark={dark} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Development;
