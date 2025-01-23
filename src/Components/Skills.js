import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s" },
  { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.pngpath-to-your-css-image.png" },
  { name: "JavaScript", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s" },
  { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
  { name: "Bootstrap", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
  { name: "Spring Boot", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WYHLYIVN011VGVl1pkwPRrAGWPBbG25YrQ&s" },
  { name: "C", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGGOif2hN0ojHqVg2OZDQgERhHVD70MoaDg&s" },
  { name: "Java", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" },
];

function Skills() {
  return (
    <>
        <section id="skills" className="section">
        <h2 className="skilltitle">Skills</h2>

        <br></br>
       

    <div className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <div className="skill-icon">
            <img src={skill.img} alt={skill.name} />
          </div>
          <div className="skill-name">{skill.name}</div>
        </div>
      ))}
    </div>
    <hr></hr>
    </section>
    </>
  );
}

export default Skills;
