import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
  <img src={`${process.env.PUBLIC_URL}/123.jpg`} alt="Your Photo" className="profile-photo" />

      <h2>Kent Josh M. Gutierrez</h2>
      <div className="content">
        <p>Hello! I'm Kent Josh M. Gutierrez, and I'm passionate about web development. Here are a few things about me:</p>
        <h3>Objective</h3>
        <p>
          As a 3rd-year BSIT student at Holy Cross Davao College, I am eager to secure a position as an Encoder, leveraging my strong foundation in data entry. I am committed to applying and enhancing my knowledge in data management, accuracy, and efficiency within a professional setting. My coursework and hands-on projects have equipped me with the skills necessary to contribute effectively to your team.
        </p>
        <ul>
          <li>Detail-oriented and efficient in data entry tasks</li>
          <li>Proficient in various programming languages</li>
          <li>Avid learner with a passion for technology</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
