import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { HamburgerElastic } from 'react-animated-burgers';
import { Link as LS } from 'react-scroll';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import styles from './style.module.css';

function Header({ light, initialColor }) {
  const [white, setWhite] = useState(light);
  const [openSidebar, setOpenSidebar] = useState(false);

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

  function getToContact() {
    let newScroll = 0;
    const element = document.querySelector('.contact_form');
    if (element) {
      newScroll = element.getBoundingClientRect().y;
      if (newScroll > 0) {
        window.scrollTo(0, newScroll);
      }
    }
  }

  const headerClass = classnames({
    [styles.main_header]: true,
    [styles.header_box]: white && !openSidebar,
    white_color: white,
    [styles.main_header_white_content]: initialColor && !white && !openSidebar,
  });

  function toggle() {
    setOpenSidebar(!openSidebar);
  }

  return (
    <>
      <header
        className={`${headerClass} title_font transparent_color row u__no_margin justify-content-center`}
        style={{
          padding: (white || openSidebar) ? '0.1em 0' : '0.7em 0',
        }}
      >
        <div className="col-11 col-xl-12 offset-xl-2 u__no_padding">
          <div className="row u__no_margin align-items-center justify-content-between justify-content-sm-start">
            <div className="col-xl-auto col-auto u__no_padding">
              <Link to="/">
                <h1 className="black_color_text u__no_margin">
                  Aza
                  <span className="red_color_text">C</span>
                  hii
                </h1>
              </Link>
            </div>
            <ItemHeader text="SERVICIOS" to="/servicios" />
            <ItemHeader text="EQUIPO" to="/equipo" />
            <HamburgerElastic
              buttonWidth={25}
              className={`d-block d-sm-none u__no_outline ${initialColor && !white && !openSidebar ? styles.menu_button_white : ''}`}
              isActive={openSidebar}
              toggleButton={toggle}
            />
          </div>
        </div>
      </header>
      <Sidebar
        isOpen={openSidebar}
        moveToContact={() => {
          setOpenSidebar(false);
          document.documentElement.style.overflowY = 'auto';
          getToContact();
        }}
      />
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

const ItemHeader = ({
  text, to = null, featured = 0, onContact,
}) => (to ? (
  <Link to={to}>
    <div className="col-xl-auto col-auto d-none d-sm-block u__pointer">
      <h5 className="black_color_text u__no_margin">
        {text}
&#160;&#160;
      </h5>
    </div>
  </Link>
) : (
  <LS
    activeClass="blue_light_color_text"
    to="contact_form"
    spy
    smooth={false}
    offset={50}
    duration={500}
  >
    <div
      onClick={onContact}
      className="col-xl-auto col-auto d-none d-sm-block u__pointer"
    >
      <h5 className="black_color_text u__no_margin">
        {text}
&#160;&#160;
      </h5>
    </div>
  </LS>
));

export default Header;
