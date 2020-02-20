import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import classnames from 'classnames';
import styles from './style.module.css';
import CodeIcons from '../../CodeIcons';

const MainBanner = () => {
  const data = useStaticQuery(graphql`
    query Banner {
      placeholderImage: file(relativePath: { eq: "texture-1909992_1280.jpg" }) {
        childImageSharp {
          fluid(base64Width: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const imageContainerClass = classnames({
    'col-xl-5 u__no_padding col-12': true,
    [styles.main_image_container]: true,
  });

  return (
    <div className={`${styles.main_banner} row u__no_margin`}>
      <div className="col-xl-12 u__no_padding">
        <div className="row u__no_margin align-items-center justify-content-center">
          <div className="col-xl-6 col-12 offset-xl-1 u__no_padding">
            <div className="row u__no_margin justify-content-center">
              <CodeIcons />
              <div className="col-xl-12 u__no_padding col-11 u__small_margin_vertical">
                <h1
                  className={`${styles.description_text} black_color_text main_font`}
                >
                  Consultoría y desarrollo de soluciones digitales
                </h1>
              </div>
              <div className="col-xl-12 u__no_padding d-none d-sm-block col-11 u__small_margin_vertical">
                <Link to="/services">
                  <button
                    className={`black_color white_color_text u__main_box_shadow ${styles.button_services}`}
                    type="button"
                  >
                    SERVICIOS
                  </button>
                </Link>
              </div>
              <div className="col-11 u__no_padding d-block d-xl-none u__small_margin_bottom">
                <div className={styles.responsive_button}>
                  Nuestros servicios
                </div>
              </div>
            </div>
          </div>
          <div className={imageContainerClass}>
            <BackgroundImage
              Tag="section"
              className={styles.bg}
              fluid={data.placeholderImage.childImageSharp.fluid}
              backgroundColor="#040e18"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledBackgroundSection = styled(MainBanner)`
  width: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default StyledBackgroundSection;
