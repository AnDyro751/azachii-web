import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedin,
} from 'react-icons/fa';
import ThemeContext from '../../contexts/Theme';
import {
  onFacebook, onTwitter, onWhatsApp, onLinkedin
} from './shareOn';
import styles from './style.module.css';

function Share({ url, title, message }) {
  const { dark } = useContext(ThemeContext);

  const iconClass = classnames({
    'col-auto u__no_padding u__pointer': true,
    [styles.share_icon]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const titleClass = classnames({
    'col-auto u__no_padding': true,
    black_color_text: !dark,
    white_color_text: dark,
  });

  return (
    <div className="row u__no_margin align-items-center">
      <h4 className={titleClass}>
        Compartir en:
      </h4>
      <FaFacebookF
        className={iconClass}
        size={30}
        onClick={() => onFacebook(url, message)}
      />
      <FaTwitter
        className={iconClass}
        size={30}
        onClick={() => onTwitter(url, message)}
      />
      <FaWhatsapp
        className={iconClass}
        size={30}
        onClick={() => onWhatsApp(url, message)}
      />
      <FaLinkedin
        className={iconClass}
        size={30}
        onClick={() => onLinkedin(url, title, message)}
      />
    </div>
  );
}

Share.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Share;
