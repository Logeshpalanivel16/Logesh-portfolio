import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from '../Images/logo.jpeg';

import './Navbarstyle.css';

export function Nav() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
        <Navbar.Brand href="#home" className="navimage">
          <img
            alt="Logo"
            src={Logo}  
            width="40"
            height="40"
            className="navimg"
          />
        </Navbar.Brand>
        <h4 className="navtitle">Logesh</h4>
        
        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggler' />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ml-auto d-flex align-items-center nav-content">
            <ul className="navlinks">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#education" className="nav-link">Education</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
            </ul>
            <div className="button">
            <a href="#footer">
              <Button variant="danger" className="ml-2">Contact Me</Button></a>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
