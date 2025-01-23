import React from "react";
import "./Internship.css";

function Internship() {
  return (
    <>
    <h2 className="interntit">Internship</h2>
    <div className="internship-container">
      <div className="internship-card">
        <h2 className="internship-title">Java Full Stack Intern</h2>
        <h3 className="internship-company">Expleo Solutions</h3>
        <p className="internship-duration">January 2024 - June 2024</p>
        <ul className="internship-responsibilities">
          <li>Built and maintained web applications using ReactJS, Spring Boot, and Hibernate.</li>
          <li>
            Collaborated with cross-functional teams to integrate APIs and optimize system performance.
          </li>
          <li>Conducted testing to identify and resolve issues in front-end and back-end systems.</li>
        </ul>
      </div>
    </div>
    <hr></hr>
    </>
  );
}

export default Internship;
