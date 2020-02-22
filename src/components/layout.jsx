/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import { Helmet } from 'react-helmet';
import ReactTooltip from 'react-tooltip';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Footer from './Footer';
import WhatsAppCustomer from './WhatsAppCustomer';
import Contact from './Contact';

function Layout({
  children,
  light,
  footer_color,
  footer_text,
  header,
}) {
  return (
    <>
      <Helmet defer={false} />
      <Header light={light} initialColor={header.color} />
      <div
        style={{
          margin: '0 auto',
          paddingTop: 0,
          overflow: 'hidden',
        }}
      >
        <main>
          {children}
          <Contact />
        </main>
      </div>
      <WhatsAppCustomer />
      <Footer custom_class={footer_color} text_color={footer_text} />
      <ReactTooltip />
      <ToastContainer />
    </>
  );
}

Layout.defaultProps = {
  light: false,
  footer_color: 'white_color',
  footer_text: 'black_color_text',
  header: {},
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  footer_color: PropTypes.string,
  footer_text: PropTypes.string,
  header: PropTypes.shape({
    color: PropTypes.string,
  }),
};

export default Layout;
