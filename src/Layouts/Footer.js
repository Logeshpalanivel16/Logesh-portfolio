import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footerstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function PortfolioFooter() {
  return (
    <section id="footer" className="section">


    <footer className="portfolio-footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Me</h5>
            <p className="about-text">
              Hi, I'm Logesh..
              Aspiring Developer..
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <ul className="contact-list">
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Salem</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:your.email@example.com">logeshpalanivel894@gmail.com</a></li>
              <li><FontAwesomeIcon icon={faPhone} /> 8940283325</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Social Media</h5>
            <div className="social-icons">
              <a href="https://github.com/Logeshpalanivel16" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/logeshpalanivel/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              {/* <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a> */}
              <a href="#home"  rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer-bottom">&copy; 2025 Logesh. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </section>
  );
}