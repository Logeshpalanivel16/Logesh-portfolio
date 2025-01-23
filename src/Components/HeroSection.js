import React from 'react';
import styles from './Herostyles.module.css';
import heroImg from '../Images/Logesh Photo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero() {
  return (
    <>
    <section id="hero" className={styles.container}>
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-left">
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Logesh Palanivel"
          />
        </Col>

        <Col md={6} className="text-center text-md-left">
          <div className={styles.info}>
            <h1 className={styles.name}>Logesh Palanivel</h1>
            <h2 className={styles.title}>Fullstack Developer</h2>

              

            <div className={styles.socialIcons}>
              <a href="https://github.com/Logeshpalanivel16" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className={styles.socialIcon} />
              </a>
              <a href="https://www.linkedin.com/in/logeshpalanivel/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className={styles.socialIcon} />
              </a>
            </div>

            <p className={styles.description}>
              To secure a position as a Web Application Developer, leveraging my skills in ReactJS, front-end, and back-end
              development to create responsive and user-friendly web applications while driving professional growth.
              <br></br><br></br><hr></hr>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} /> Salem
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />{' '}
                  logeshpalanivel894@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className={styles.icon} /> 8940283325
              </p>
              <hr></hr>
            </p>
          </div>
        </Col>
      </Row>

    </section>
    <hr></hr>

            </>

  );
}

export default Hero;
