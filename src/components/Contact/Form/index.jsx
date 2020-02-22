/* eslint-disable radix */
import React, { useState, useContext } from 'react';
import { FirebaseContext } from 'gatsby-plugin-firebase';
import { toast } from 'react-toastify';
import InputType from './Input';
import styles from './style.module.css';

function Form() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState(false);
  const firebase = useContext(FirebaseContext);

  function handleChange({ target }) {
    setFields(
      {
        ...fields,
        [target.name]: target.value,
      },
    );
  }

  function validForm() {
    if (fields.name.length < 3 || fields.name.length > 20) {
      toast.error('Ingresa tu nombre');
      return false;
    }
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(fields.email);
    if (!validEmail) {
      toast.error('Ingresa un correo válido para contactarte');
      return false;
    }
    const validPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(fields.phone);
    if (!validPhone && fields.phone.length !== 10) {
      toast.error('Ingresa un teléfono para contactarte');
      return false;
    }
    if (fields.subject.length < 4 || fields.subject.length > 30) {
      toast.error('Ingresa la razón de tu mensaje');
      return false;
    }
    if (fields.message.length < 4 || fields.message.length > 300) {
      toast.error('Cuentanos en qué podemos ayudarte');
      return false;
    }

    return true;
  }

  function submitForm() {
    if (validForm()) {
      setLoading(true);
      firebase
        .firestore()
        .collection('contact')
        .add(fields)
        .then(() => {
          setContact(true);
        });
      setLoading(false);
    }
  }

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
              ? document.getElementsByName('contact_form')[0].clientHeight
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
                minLength={3}
                maxLength={20}
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
              />
            </div>
            <div className="col-xl-12 col-12">
              <p className={`${styles.label}`}>Mensaje</p>
              <textarea
                minLength={4}
                maxLength={300}
                onChange={handleChange}
                name="message"
                placeholder="¿Como ingreso mi negocio al mundo digital?"
                className={styles.message}
              />
              <button
                type="button"
                disabled={loading}
                className={`${styles.send_button} blue_light_color white_color_text u__main_box_shadow`}
                style={{
                  float: 'right',
                  cursor: loading ? 'auto' : 'pointer',
                }}
                onClick={submitForm}
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
}

export default Form;
