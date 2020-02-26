/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useMixpanel } from 'gatsby-plugin-mixpanel';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

function getRandom() {
  const number = Math.floor(Math.random() * 2) + 1;
  if (number === 1) {
    return '529516074586';
  }
  return '529514085596';
}

function WhatsAppCustomer({ initialColor }) {
  const [transparent, setTransparent] = useState(false);
  const mixpanel = useMixpanel();
  const number = getRandom();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (initialColor) {
        if (window.scrollY >= 20) {
          setTransparent(false);
        } else {
          setTransparent(true);
        }
      }
    });

    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <div
      onClick={() => {
        window.open(
          `https://wa.me/${number}?text=Estoy interesado en sus servicios`,
          '_blank',
        );
        mixpanel.track('contact', {
          type: 'whatsapp',
          to: number,
        });
      }}
      data-tip="Contáctanos por whatsapp"
      className={`${styles.main} u__pointer u__main_box_shadow`}
      style={{ backgroundColor: transparent ? 'transparent' : '#25D366' }}
      id="whatsapp"
    >
      <FaWhatsapp color="white" className={styles.icon} />
    </div>
  );
}

WhatsAppCustomer.defaultProps = {
  initialColor: undefined,
};

WhatsAppCustomer.propTypes = {
  initialColor: PropTypes.string,
};

export default WhatsAppCustomer;
