import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdSmartphone, MdShowChart } from 'react-icons/md';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Fade from 'react-reveal/Fade';
import classnames from 'classnames';
import ItemHelpYou from './Item';
import phone from '../../images/phone_component.png';
import mac from '../../images/web_mac.png';
import camera from '../../images/camera-2030726_1920.jpg';
import consulting from '../../images/consulting.jpg';
import styles from './styles.module.css';

function HelpYou() {
  const [currentImage, setCurrentImage] = useState(mac);
  const [currentName, setCurrent] = useState('web');
  const classContainer = classnames({
    'col-xl-6 u__no_padding': true,
    main_color: currentName === 'phone',
    red_light_color: currentName === 'web',
    dark_color: currentName === 'camera',
    [styles.consulting_color]: currentName === 'consulting',
    [styles.main]: true,
  });

  return (
    <div className="row u__no_margin justify-content-center">
      <div className="col-xl-12 col-12 u__no_padding">
        <div className="row u__no_margin justify-content-center">
          <div className="col-xl-5 col-11 offset-xl-1 u__no_padding">
            <h3 className={`main_color_text main_font ${styles.main_title}`}>
              Estamos aquí para
              {' '}
              <br className="d-none d-xl-block" />
              ayudarte con
            </h3>
            <ItemHelpYou
              handleEnter={() => {
                setCurrent('web');
                setCurrentImage(mac);
              }}
              text="Tu tienda en linea"
            >
              <FaShoppingCart className="main_color_text" size={20} />
            </ItemHelpYou>
            <ItemHelpYou
              handleEnter={() => {
                setCurrent('consulting')
                setCurrentImage(consulting);
              }}
              text="Consultoría"
            >
              <MdShowChart className="main_color_text" size={20} />
            </ItemHelpYou>
            <ItemHelpYou
              handleEnter={() => {
                setCurrent('phone');
                setCurrentImage(phone);
              }}
              text="Aplicación móvil"
            >
              <MdSmartphone className="main_color_text" size={20} />
            </ItemHelpYou>
            <ItemHelpYou
              handleEnter={() => {
                setCurrent('camera');
                setCurrentImage(camera);
              }}
              text="Producción multimedia"
            >
              <GoDeviceCameraVideo className="main_color_text" size={20} />
            </ItemHelpYou>
          </div>
          <div className={classContainer}>
            <div className={styles.main_data_container}>
              <Fade right>
                <LazyLoadImage
                  style={{
                    height: '400px',
                    width: 'auto',
                  }}
                  src={currentImage}
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpYou;
