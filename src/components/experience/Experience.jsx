import React from "react";
import "./Experience.scss";

const Experience = ({ info }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-heading">
        <h2>
          My <span>Experience</span>
        </h2>
      </div>
      <div className="experience-container">
        {info.experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="timeline-dot"></div>
            <div className="experience-content">
              <p className="exp-year">{exp.year}</p>
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
