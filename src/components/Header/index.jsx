import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import { HamburgerElastic } from 'react-animated-burgers';
import PropTypes from 'prop-types';
import ThemeContext from '../../contexts/Theme';
import DarkToggle from '../DarkToggle';
import ItemHeader from './Item';
import Sidebar from './Sidebar';
import styles from './style.module.css';

function Header({ light, initialColor }) {
  const [white, setWhite] = useState(light);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!light) {
        if (window.scrollY >= 20) {
          setWhite(true);
        } else {
          setWhite(false);
        }
      }
    });

    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  const headerClass = classnames({
    [styles.main_header]: true,
    [styles.header_box]: white && !openSidebar,
    white_color: white && !dark,
    secondary_black_color: white && dark && !openSidebar,
    [styles.main_header_white_content]: initialColor && !white && !openSidebar,
  });

  function toggle() {
    setOpenSidebar(!openSidebar);
  }

  return (
    <>
      <header
        className={`${headerClass} title_font row u__no_margin justify-content-center`}
        style={{
          padding: (white && !openSidebar) ? '0.1em 0' : '0.7em 0',
        }}
      >
        <div className="col-11 col-xl-12 offset-xl-2 u__no_padding">
          <div className="row u__no_margin align-items-center justify-content-between justify-content-sm-start">
            <div className="col-xl-auto col-auto u__no_padding">
              <Link to="/">
                <h1 className={`u__no_margin ${dark ? 'white_color_text' : 'black_color_text'}`}>
                  Aza
                  <span className="red_color_text">C</span>
                  hii
                </h1>
              </Link>
            </div>
            <ItemHeader dark={dark} text="SERVICIOS" to="/servicios" />
            <ItemHeader dark={dark} text="EQUIPO" to="/equipo" />
            <ItemHeader dark={dark} text="BLOG" to="/blog" />
            <div className="col-auto">
              <DarkToggle />
            </div>
            <HamburgerElastic
              buttonWidth={25}
              className={`d-block d-sm-none u__no_outline u__no_padding ${(initialColor && !white && !openSidebar) || dark ? styles.menu_button_white : ''}`}
              isActive={openSidebar}
              toggleButton={toggle}
            />
          </div>
        </div>
      </header>
      <Sidebar dark={dark} isOpen={openSidebar} />
    </>
  );
}

Header.defaultProps = {
  light: false,
  initialColor: undefined,
};

Header.propTypes = {
  initialColor: PropTypes.string,
  light: PropTypes.bool,
};

export default Header;
