import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

function Item({ text, to, dark }) {
  return (
    <Link to={to} className="col-xl-auto col-auto d-none d-sm-block u__pointer">
      <h5 className={`u__no_margin ${dark ? 'white_color_text' : 'black_color_text'}`}>
        {text}
        &#160;&#160;
      </h5>
    </Link>
  );
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
};

export default Item;
