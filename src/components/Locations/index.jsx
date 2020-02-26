import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Locations() {
  return (
    <div className={`row justify-content-center ${styles.locations}`}>
      <div className="col-xl-10 col-11 u__no_padding">
        <div className="row u__no_margin justify-content-center">
          <Location nameShort="OAX" name="Oaxaca de Juárez, Oaxaca" to="/oaxaca" />
          <Location nameShort="QRO" name="Querétaro de Arteaga, Querétaro" to="/queretaro" />
        </div>
      </div>
    </div>
  );
}

function Location({ nameShort, name, to }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 u__no_padding">
      <h2 className={styles.city_name}>
        <Link to={to}>
          {nameShort}
        </Link>
      </h2>
      <p className={styles.city_name_long}>
        {name}
      </p>
    </div>
  );
}

Location.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  nameShort: PropTypes.string.isRequired,
};

export default Locations;
