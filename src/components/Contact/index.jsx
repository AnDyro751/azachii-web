/* eslint-disable radix */
import React, { useState } from 'react';
import { FirebaseContext } from 'gatsby-plugin-firebase';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
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
          <div
            className={`col-xl-7 col-12 u__no_padding ${styles.form_container}`}
          >
            <FormContact />
          </div>
        </div>
      </div>
    </Element>
  );
}

const FormContact = () => {
  const [fields, setFields] = useState({});
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState(false);
  const firebase = React.useContext(FirebaseContext);
  const [valid, setValid] = useState(false);
  const [validFields, setValidFields] = useState(new Array(5).fill(false));
  const [editedFields, setEditedFields] = useState(new Array(5).fill(false));

  const handleChange = ({ target }) => {
    setFields(
      {
        ...fields,
        [target.name]: target.value,
      },
    );
    if (!editedFields[Number.parseInt(target.id)]) {
      if (target.value !== '') {
        const newEditedFields = editedFields;
        newEditedFields[Number.parseInt(target.id)] = true;
        setEditedFields(newEditedFields);
      }
    }
    const newValidFields = validFields;
    switch (target.type) {
      case 'email':
        newValidFields[
          Number.parseInt(target.id)
        // eslint-disable-next-line no-useless-escape
        ] = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          target.value,
        );
        break;
      case 'tel':
        newValidFields[Number.parseInt(target.id)] = /^\d{10}$/.test(
          target.value,
        );
        break;
      default:
        // eslint-disable-next-line max-len
        newValidFields[Number.parseInt(target.id)] = target.value.length >= Number.parseInt(target.minLength)
          && target.value.length <= Number.parseInt(target.maxLength);
    }
    setValidFields(newValidFields);
    setValid(newValidFields.filter((item) => item === false).length === 0);
  };

  return (
    <div className="row u__no_margin contact_form">
      {contact ? (
        <div
          className="col-xl-12"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: contact
              ? document.getElementById('contact_form').clientHeight
              : 0,
          }}
        >
          <p style={{ fontWeight: 'bold', color: '#4e4e4e', fontSize: '2em' }}>
            Gracias por contactarnos.
            <p>Te atenderemos en breve.</p>
          </p>
        </div>
      ) : (
        <div className="col-xs-12 u__no_padding">
          <div className="row u__no_margin">
            <div className="col-xl-12">
              <h2 className={`black_color_text ${styles.main_title}`}>
                Contáctanos
              </h2>
            </div>
            <div className="col-xl-6 col-12">
              <InputType
                autoComplete="name"
                label="Nombre"
                placeholder="Richard Hendricks"
                onChange={handleChange}
                name="name"
                id={0}
                minLength={3}
                maxLength={20}
                valid={validFields[0]}
                edited={editedFields[0]}
              />
            </div>
            <div className="col-xl-6 col-12">
              <InputType
                label="Email"
                type="email"
                autoComplete="email"
                placeholder="richard@piedpiper.com"
                onChange={handleChange}
                name="email"
                id={1}
                valid={validFields[1]}
                edited={editedFields[1]}
              />
            </div>
            <div className="col-xl-6 col-12">
              <InputType
                label="Télefoto"
                type="tel"
                autoComplete="tel"
                placeholder="xxxxxxxxxx"
                onChange={handleChange}
                name="phone"
                id={2}
                valid={validFields[2]}
                edited={editedFields[2]}
              />
            </div>
            <div className="col-xl-6 col-12">
              <InputType
                autoComplete="subject"
                label="Asunto"
                type="text"
                placeholder="Tu mensaje..."
                onChange={handleChange}
                name="subject"
                minLength={4}
                maxLength={30}
                id={3}
                valid={validFields[3]}
                edited={editedFields[3]}
              />
            </div>
            <div className="col-xl-12 col-12">
              <p className={`${styles.label}`}>Mensaje</p>
              <textarea
                id={4}
                minLength={4}
                maxLength={300}
                onChange={handleChange}
                name="message"
                placeholder="¿Como ingreso mi negocio al mundo digital?"
                className={`${styles.message} ${
                  !validFields[4] && editedFields[4]
                    ? styles.main_input_wrong
                    : ''
                }`}
              />
              <button
                type="button"
                disabled={loading || !valid}
                className={`${styles.send_button} ${
                  valid ? 'blue_light_color' : 'disabled_color'
                } white_color_text u__main_box_shadow`}
                style={{
                  float: 'right',
                  cursor: loading || !valid ? 'auto' : 'pointer',
                }}
                onClick={() => {
                  setLoading(true);
                  firebase
                    .firestore()
                    .collection('contact')
                    .add(fields)
                    .then(() => {
                      setContact(true);
                    });
                  setLoading(false);
                }}
              >
                {loading ? (
                  <div className="lds-ring">
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>
                ) : (
                  'ENVIAR'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function InputType({
  label,
  type,
  placeholder,
  whiteColor,
  autoComplete,
  onChange,
  name,
  id,
  minLength,
  maxLength,
  valid,
  edited,
}) {
  return (
    <div className={`row u__no_margin ${styles.main_input}`}>
      <div className="col-xl-12 u__no_padding">
        <p className={`${styles.label} ${whiteColor && styles.white}`}>{label}</p>
      </div>
      <div className="col-xl-12 u__no_padding">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          spellCheck="false"
          onChange={onChange}
          minLength={minLength}
          maxLength={maxLength}
          className={`${!valid && edited ? styles.main_input_wrong : ''}`}
        />
      </div>
    </div>
  );
}

InputType.defaultProps = {
  type: 'text',
  placeholder: '',
  whiteColor: false,
  autoComplete: 'off',
  minLength: 0,
  maxLength: 300,
};

InputType.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  whiteColor: PropTypes.bool,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  valid: PropTypes.bool.isRequired,
  edited: PropTypes.bool.isRequired,
};

export default Contact;
