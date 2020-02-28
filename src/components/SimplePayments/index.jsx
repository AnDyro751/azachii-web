import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classnames from 'classnames';
import ThemeContext from '../../contexts/Theme';
import styles from './styles.module.css';

function SimplePayments() {
  const { dark } = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "checkout_a.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const mainContainerClass = classnames({
    [styles.main_container]: true,
    'row justify-content-center u__no_margin': true,
    black_color: dark,
  });
  const titleClass = classnames({
    [styles.item_description]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const pitchClass = classnames({
    [styles.item]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const descriptionClass = classnames({
    [styles.main_description]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const headerClass = classnames({
    [styles.header]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });

  return (
    <div
      className={mainContainerClass}
    >
      <div className="col-xl-10 col-11 u__no_padding">
        <div className="row u__no_margin justify-content-between">
          <div className="col-xl-6">
            <Img
              imgStyle={{
                background: 'transparent',
                height: '100%',
                width: 'auto',
                userSelect: 'none',
              }}
              loading="lazy"
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </div>
          <div className="col-xl-6 u__no_padding align-content-end">
            <div className="row u__no_margin">
              <div className="col-xl-12 u__no_padding">
                <h3 className={titleClass}>
                  PROCESAMIENTO DE PAGOS
                </h3>
              </div>
              <div className="col-xl-12 u__no_padding">
                <h3 className={pitchClass}>
                  Pagos y suscripciones sin configuración alguna
                </h3>
                <h4 className={descriptionClass}>
                  Acepta tarjetas de crédito de forma rápida y segura en tu
                  tienda en online.
                </h4>
                <h3 className={headerClass}>
                  Opciones de pago
                </h3>
                <p className={descriptionClass}>
                  Crea suscripciones para tus membresías o acepta meses sin intereses.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SimplePayments;
