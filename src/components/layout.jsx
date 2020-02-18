/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import { Helmet } from 'react-helmet';
import ReactTooltip from 'react-tooltip';
import Header from './Header';
import Footer from './Footer';
import WhatsAppCustomer from './WhatsAppCustomer';
import Contact from './Contact';
import Locations from './Locations';

function Layout({
  children,
  light,
  footer_color,
  footer_text,
}) {
  return (
    <>
      <Helmet defer={false} />
      <Header light={light} />
      <div
        style={{
          margin: '0 auto',
          paddingTop: 0,
          overflow: 'hidden',
        }}
      >
        <main>
          {children}
          <Locations />
          <Contact />
        </main>
      </div>
      <WhatsAppCustomer />
      <Footer custom_class={footer_color} text_color={footer_text} />
      <ReactTooltip />
    </>
  );
}

Layout.defaultProps = {
  light: false,
  footer_color: 'white_color',
  footer_text: 'black_color_text',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  footer_color: PropTypes.string,
  footer_text: PropTypes.string,
};

export default Layout;
