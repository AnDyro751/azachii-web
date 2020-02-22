import React from 'react';
import { Element } from 'react-scroll';
import Form from './Form';
import styles from './styles.module.css';

function Contact() {
  return (
    <Element
      name="contact_form"
      className={`row u__big_margin_vertical justify-content-center ${styles.box_container}`}
    >
      <div className={styles.linear} />
      <div className="col-xl-10 col-11 u__no_padding">
        <div className="row u__no_margin justify-content-between align-items-start">
          <div className="col-xl-5 col-11 u__no_padding">
            <h2 className={`black_color_text ${styles.main_title}`}>
              Estamos para ayudarte
            </h2>
            <h4 className={`${styles.send} black_color_text u__normal_font`}>
              Responderemos todas tus preguntas con brevedad.
              <br />
              No dudes en contactarnos.
            </h4>
          </div>
          <div className={`col-xl-7 col-12 u__no_padding ${styles.form_container}`}>
            <Form />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
