import React from "react";
import "./Achievements.css";
import aca from '../Images/academic.jpg';
import ach from '../Images/achieve.jpg';


const achievements = [
  {
    title: "Overall Academic Topper",
    description: "Consistently achieved the highest grades throughout the program.",
    img: aca, 
  },
  {
    title: "KIOT Achiever Award",
    description:
      "Recognized for exceptional performance in academics and extracurricular activities.",
    img: ach,
  },
];

function Achievements() {
  return (
    <div className="container1 py-5">
      <h1 className="text-center mb-5">Achievements</h1>
      <div className="row g-4">
        {achievements.map((achievement, index) => (
          <div className="col-md-6" key={index}>
            <div className="card achievement-card-short d-flex align-items-center">
              <img
                src={achievement.img}
                className="achievement-image-short me-3"
                alt={achievement.title}
              />
              <><br></br></>
              <div>
                <h5 className="card-title mb-1">{achievement.title}</h5>
                <p className="card-text">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
