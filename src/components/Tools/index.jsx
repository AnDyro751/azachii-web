/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import classnames from 'classnames';
import ThemeContext from '../../contexts/Theme';
import ToolItem from './Item';
import tools from './tools';
import styles from './styles.module.css';

function Tools() {
  const { dark } = useContext(ThemeContext);
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
  const mainClass = classnames({
    'row u__no_margin justify-content-center': true,
    secondary_white_color: !dark,
    secondary_black_color: dark,
  });
  const titleClass = classnames({
    [styles.main_title]: true,
    main_color_text: !dark,
    main_color_dark_text: dark,
  });
  const descriptionClass = classnames({
    u__normal_font: true,
    main_color_text: !dark,
    main_color_dark_text: dark,
  });
  const buttonClass = classnames({
    'white_color_text u__main_box_shadow': true,
    [styles.button]: true,
    blue_light_color: !dark,
    red_color: dark,
  });
  const mainToolsClass = classnames({
    black_color: dark,
    white_color: !dark,
    [styles.tools_section]: true,
    'justify-content-center row u__no_margin': true,
  });

  return (
    <>
      <div className={mainClass}>
        <div className="col-11 u__no_padding">
          <div
            className={`row justify-content-between u__no_margin align-items-center ${styles.main}`}
          >
            <div className="col-xl-4 offset-xl-1 col-sm-5 u__no_padding">
              <Img
                className={styles.image}
                fluid={data.placeholderImage.childImageSharp.fluid}
              />
            </div>
            <div className="col-xl-5 col-sm-6 col-12 u__no_padding">
              <h3 className={titleClass}>
                Herramientas que te harán la vida más simple
              </h3>
              <h4 className={descriptionClass}>
                Descubre como las herramientas digitales te ayudan a
                {' '}
                impulsar el crecimiento de tu negocio.
              </h4>
              <div className="row u__no_margin">
                <div className="col-xl-5 u__no_padding">
                  <Link to="/servicios">
                    <button
                      type="button"
                      className={buttonClass}
                    >
                      DESCUBRIR
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={mainToolsClass}>
        <div className="col-11 u__no_padding">
          <div className="row u__no_margin justify-content-center">
            {tools.map((tool, i) => (
              <ToolItem key={i} tool={tool} dark={dark} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
