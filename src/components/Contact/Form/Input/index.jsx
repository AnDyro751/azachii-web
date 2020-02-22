import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Input({
  label,
  type,
  placeholder,
  whiteColor,
  autoComplete,
  onChange,
  name,
  minLength,
  maxLength,
}) {
  return (
    <div className={`row u__no_margin ${styles.main_input}`}>
      <div className="col-xl-12 u__no_padding">
        <p className={`${styles.label} ${whiteColor && styles.white}`}>{label}</p>
      </div>
      <div className="col-xl-12 u__no_padding">
        <input
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          spellCheck="false"
          onChange={onChange}
          minLength={minLength}
          maxLength={maxLength}
        />
      </div>
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  whiteColor: false,
  autoComplete: 'off',
  minLength: 0,
  maxLength: 300,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  whiteColor: PropTypes.bool,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
};

export default Input;
