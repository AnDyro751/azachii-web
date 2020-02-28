import React, { useContext } from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import classnames from 'classnames';
import ThemeContext from '../../../contexts/Theme';
import styles from './style.module.css';

const MainBanner = () => {
  const { dark } = useContext(ThemeContext);
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
    'col-sm-5 u__no_padding col-12': true,
    [styles.main_image_container]: true,
  });
  const bannerClass = classnames({
    [styles.main_banner]: true,
    'row u__no_margin align-items-center': true,
    black_color: dark,
  });
  const titleClass = classnames({
    main_font: true,
    black_color_text: !dark,
    white_color_text: dark,
    [styles.description_text]: true,
  });
  const buttonClass = classnames({
    u__main_box_shadow: true,
    [styles.button_services]: true,
    'black_color white_color_text': !dark,
    'white_color black_color_text': dark,
  });

  return (
    <div className={bannerClass}>
      <div className="col-12 col-sm-7 u__no_padding">
        <div className="row u__no_margin justify-content-center">
          <div className="col-11 col-sm-10 col-md-9 u__no_padding">
            <h1 className={titleClass}>
              Consultoría y desarrollo de soluciones digitales
            </h1>
            <Link to="/servicios">
              <button
                className={buttonClass}
                type="button"
              >
                SERVICIOS
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={imageContainerClass} style={{ height: '100%', minHeight: '30vh' }}>
        <BackgroundImage
          Tag="section"
          className={styles.bg}
          style={{ height: '100%', minHeight: '30vh' }}
          fluid={data.placeholderImage.childImageSharp.fluid}
          backgroundColor="#040e18"
        />
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
