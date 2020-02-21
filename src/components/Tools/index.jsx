/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useMixpanel } from 'gatsby-plugin-mixpanel';
import PropTypes from 'prop-types';
import ToolItem from './Item';
import styles from './styles.module.css';

function Tools({ limit }) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "laptop-2298286_1280.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [allPromos, setPromos] = useState([]);
  const mixPanel = useMixpanel();

  useFirebase((firebase) => {
    const subs = firebase
      .firestore()
      .collection('tools')
      .limit(limit)
      .onSnapshot((snaps) => {
        const newTools = [];
        snaps.docs.forEach((doc) => {
          newTools.push({ ...doc.data(), id: doc.id });
        });
        setPromos(newTools);
      });
    return () => subs();
  }, []);

  return (
    <div className="row u__no_margin justify-content-center">
      <div className="col-xl-12 col-12 u__no_padding">
        <div
          className={`row justify-content-center u__no_margin align-items-center ${styles.main}`}
        >
          <div className="col-xl-4 offset-xl-1 u__no_padding d-none d-xl-block">
            <Img
              className={styles.image}
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </div>
          <div className="col-xl-5 offset-xl-1 col-11 u__no_padding">
            <h3 className={`main_color_text ${styles.main_title}`}>
              Herramientas que te harán la vida más simple
            </h3>
            <h4 className="u__normal_font main_color_text">
              Descubre como las herramientas digitales te ayudan a
              {' '}
              impulsar el crecimiento de tu negocio.
              Conoce a tus clientes y deja que ellos te conozcan.
            </h4>
            <div className="row u__no_margin">
              <div className="col-xl-5 u__no_padding">
                <button
                  type="button"
                  onClick={() => {
                    window.open('https://forms.gle/jGBNpCnUEoURBPTC7', '_blank');
                    mixPanel.track('go_to_free_form');
                    if (window.fbq) {
                      window.fbq('track', 'CompleteRegistration');
                    }
                  }}
                  className={`blue_light_color white_color_text u__main_box_shadow ${styles.button}`}
                >
                  DESCUBRIR
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row u__no_margin justify-content-center">
          <div className="col-xl-11 u__no_padding">
            <div className={`row u__no_margin ${styles.main_items}`}>
              {allPromos.map((tool, i) => (
                <ToolItem key={i} tool={tool} />
              ))}
            </div>
            {process.env.NODE_ENV === 'development' && (
              <div className="row u__big_margin_vertical justify-content-center">
                <div className="col-xl-2 col-11 u__no_padding">
                  <button
                    type="button"
                    className={`blue_light_color u__main_box_shadow white_color_text ${styles.button}`}
                  >
                    VER MÁS
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Tools.defaultProps = {
  limit: 3,
};

Tools.propTypes = {
  limit: PropTypes.number,
};

export default Tools;
