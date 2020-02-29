import React, { useContext } from 'react';
import classnames from 'classnames';
import { FiSun, FiMoon } from 'react-icons/fi';
import ThemeContext from '../../contexts/Theme';
import Toggle from './Toggle';

function DarkToggle() {
  const { dark, toggleDark } = useContext(ThemeContext);

  const labelClass = classnames({
    'col-auto u__no_padding': true,
    black_color_text: !dark,
    white_color_text: dark,
  });

  return (
    <div className="row u__no_margin align-items-center">
      <FiSun size={20} className={labelClass} />
      <div className="col-auto u__no_padding">
        <Toggle
          checked={dark}
          onChange={toggleDark}
          value="dark"
        />
      </div>
      <div className={labelClass}>
        <FiMoon size={20} className={labelClass} />
      </div>
    </div>
  );
}

export default DarkToggle;
