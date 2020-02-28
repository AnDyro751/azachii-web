/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import classnames from 'classnames';
import Item from '../Tools/Item';
import ThemeContext from '../../contexts/Theme';
import items from './items';
import styles from './style.module.css';

function Design() {
  const { dark } = useContext(ThemeContext);

  const mainClass = classnames({
    'row justify-content-center': true,
    [styles.design]: true,
    black_color: dark,
  });
  const titleClass = classnames({
    [styles.design_title]: true,
    white_color_text: dark,
    black_color_text: !dark,
  });

  return (
    <div className={mainClass}>
      <div className="col-11 col-lg-10 u__no_padding">
        <div className="row u__no_margin justify-content-center">
          <h2 className={titleClass}>
            Diseño
          </h2>
        </div>
        <div className="row u__no_margin justify-content-center">
          {items.map((data, index) => (
            <Item tool={data} key={index} dark={dark} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Design;
