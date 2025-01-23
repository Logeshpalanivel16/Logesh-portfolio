import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Website – Horizon",
    description: [
      "Frontend: Built a seamless, responsive user interface using React.",
      "Backend: Developed RESTful services with Spring Boot and Hibernate ORM for efficient data handling.",
      "Enhanced functionality, user experience, and responsive web design through seamless integration.",
    ],
    img: "https://imageio.forbes.com/specials-images/imageserve/6419b4476af64ebf89bdef19/e-commerce/960x0.jpg?format=jpg&width=960", // Replace with your image path
  },
  {
    title: "ATM Transaction System",
    description: [
      "Developed an ATM Transaction System, a Java console-based application designed to simulate basic banking operations.",
      "Technology Stack: Core Java, JDBC, Object-Oriented Programming (OOP) concepts, and Exception Handling.",
    ],
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2017-12/15/full/1513278084-3646.jpg", // Replace with your image path
  },
];

function Projects() {
  return (
    <>
    <div className="container py-5">
      <br></br>
      <h1 className="text-center mb-5">Projects</h1>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-12" key={index}>
            <div className="card project-card flex-md-row">
              <img
                src={project.img}
                className="card-img-left img-fluid project-image"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <ul className="project-description list-unstyled">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <hr></hr>
    </>
  );
}

export default Projects;
