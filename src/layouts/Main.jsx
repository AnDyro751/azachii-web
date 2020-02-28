/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReactTooltip from 'react-tooltip';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppCustomer from '../components/WhatsAppCustomer';
import Contact from '../components/Contact';

function Layout({
  children,
  light,
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
      <WhatsAppCustomer initialColor={header.color} />
      <Footer />
      <ReactTooltip />
      <ToastContainer />
    </>
  );
}

Layout.defaultProps = {
  light: false,
  header: {},
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  header: PropTypes.shape({
    color: PropTypes.string,
  }),
};

export default Layout;
