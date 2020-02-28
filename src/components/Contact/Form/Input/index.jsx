import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.css';

function Input({
  label,
  type,
  placeholder,
  autoComplete,
  onChange,
  name,
  minLength,
  maxLength,
  dark,
}) {
  const labelClass = classnames({
    [styles.label]: true,
    main_color_dark_text: dark,
    main_color_text: !dark,
  });

  return (
    <div className={`row u__no_margin ${styles.main_input}`}>
      <div className="col-xl-12 u__no_padding">
        <p className={labelClass}>
          {label}
        </p>
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
  autoComplete: 'off',
  minLength: 0,
  maxLength: 300,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  dark: PropTypes.bool.isRequired,
};

export default Input;
