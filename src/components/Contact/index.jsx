import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import classnames from 'classnames';
import ThemeContext from '../../contexts/Theme';
import Form from './Form';
import styles from './styles.module.css';

function Contact() {
  const { dark } = useContext(ThemeContext);

  const mainClass = classnames({
    'row justify-content-center': true,
    [styles.box_container]: true,
    black_color: dark,
  });
  const titleClass = classnames({
    [styles.main_title]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const messageClass = classnames({
    [styles.send]: true,
    u__normal_font: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const formClass = classnames({
    'col-md-7 col-11 u__no_padding': true,
    [styles.form_container]: true,
    secondary_black_color: dark,
    secondary_white_color: !dark,
  });

  return (
    <Element name="contact_form" className={mainClass}>
      <div
        style={{
          background: dark ? 'linear-gradient(90deg, rgba(183, 28, 28, 1), rgba(183, 28, 28, 1))' : 'linear-gradient(90deg, rgba(58, 77, 167, 1), rgba(58, 77, 167, 1))'
        }}
        className={styles.linear}
      />
      <div className="col-xl-10 col-11 u__no_padding">
        <div className="row u__no_margin justify-content-center">
          <div className="col-md-5 col-11 u__no_padding">
            <h2 className={titleClass}>
              Estamos para ayudarte
            </h2>
            <h4 className={messageClass}>
              Responderemos todas tus preguntas con brevedad.
              <br />
              No dudes en contactarnos.
            </h4>
          </div>
          <div className={formClass}>
            <Form dark={dark} />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
