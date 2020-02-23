/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import ToolItem from './Item';
import tools from './tools';
import styles from './styles.module.css';

function Tools() {
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
            </h4>
            <div className="row u__no_margin">
              <div className="col-xl-5 u__no_padding">
                <button
                  type="button"
                  onClick={() => {
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
            <div className="row u__no_margin justify-content-center">
              {tools.map((tool, i) => (
                <ToolItem key={i} tool={tool} />
              ))}
            </div>
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
