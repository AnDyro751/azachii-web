import React from 'react';
import styles from './style.module.css';
import { Link } from "gatsby"

const HeaderSidebar = ({isOpen, moveToContact}) => (
  <div className={styles.sidebar} style={{left: isOpen ? 0 : '-100%'}}>
    <div className={styles.sidebar_content} style={{paddingTop: isOpen ? document.getElementsByTagName('header')[0].clientHeight : 0}}>
      <div style={{height: '88%'}} className='row u__no_margin justify-content-center align-items-center'>
        <div className='col-auto u__no_padding'>
          <Link to="/services">
            <h5 className="black_color_text sidebar_item">SERVICIOS</h5>
          </Link>
          <h5 onClick={moveToContact} style={{cursor: 'pointer'}} className="black_color_text sidebar_item">CONTACTO</h5>
          <Link to="/free">
            <h5 className="black_color_text u__no_margin sidebar_item">WEB GRATIS</h5>
          </Link>
        </div>
      </div>
    </div>
    <style>{`
      .sidebar_item {
        font-size: 1.8em;
        margin: 0 0 1.5em 0 !important;
        text-align: center;
      }
    `}</style>
  </div>
);

export default HeaderSidebar;
