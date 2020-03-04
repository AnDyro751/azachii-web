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
    'u__main_box_shadow col-12 col-sm-auto': true,
    [styles.our_services_button]: true,
    blue_light_color: !dark,
    red_color: dark,
  });
  const separatorClass = classnames({
    'separator col-1 u__no_padding': true,
    black_color: !dark,
    white_color: dark,
  });
  const messageClass = classnames({
    [styles.message]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });

  return (
    <div className={bannerClass}>
      <div className="col-12 col-sm-7 u__no_padding">
        <div className="row u__no_margin justify-content-center">
          <div className="col-11 col-sm-10 col-md-9 u__no_padding">
            <h1 className={titleClass}>
              Desarrollo de soluciones digitales
            </h1>
            <div className="row u__no_margin">
              <div className={separatorClass} />
            </div>
            <p className={messageClass}>
              Tienes la idea y la visión. Nosotros el equipo necesario para llevarla acabo.
            </p>
            <div className="row u__no_margin">
              <Link to="/servicios" className={buttonClass}>
                DESAROLLA MI IDEA
              </Link>
            </div>
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
