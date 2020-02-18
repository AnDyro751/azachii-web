import React from 'react';
import { Link } from 'gatsby';
import styles from './style.module.css';

function Locations() {
  return (
    <div className={`row justify-content-center ${styles.locations}`}>
      <div className="col-xl-10 col-11 u__no_padding">
        <div className="row u__no_margin justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 u__no_padding">
            <h2 className={styles.city_name}>
              <Link to="/oaxaca">
                Oaxaca
              </Link>
            </h2>
          </div>
          <div className="col-12 col-sm-6 col-md-4 u__no_padding">
            <h2 className={styles.city_name}>
              <Link to="queretaro">
                Querétaro
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
