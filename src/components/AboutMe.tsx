import React from "react";
import "../assets/styles/AboutMe.scss";

// Importar imágenes directamente
import pythonImg from "../assets/images/skills/Python.png";
import html5Img from "../assets/images/skills/html5.png";
import css3Img from "../assets/images/skills/css3.png";
import mysqlImg from "../assets/images/skills/mysql.png";
import kotlinImg from "../assets/images/skills/kotlin.png";
import vscodeImg from "../assets/images/skills/Visual studio code.png";
import javaImg from "../assets/images/skills/Java.png";
import githubImg from "../assets/images/skills/Github.png";
import intelliJImg from "../assets/images/skills/IntelliJ.png";
import dockerImg from "../assets/images/skills/docker.png";
import bootstrap from "../assets/images/skills/bootstrap.png";
import android from "../assets/images/skills/androidstudio.png";

const skills = [
  { src: javaImg, alt: "Java" }, 
  { src: kotlinImg, alt: "Kotlin" },
  { src: pythonImg, alt: "Python" },
  { src: html5Img, alt: "HTML5" },
  { src: css3Img, alt: "CSS3" },
  { src: bootstrap, alt: "bootstrap" },
  { src: dockerImg, alt: "Docker"},
  { src: githubImg, alt: "GitHub" },
  { src: mysqlImg, alt: "MySQL" },
  { src: android, alt: "Android Studio" },  
  { src: intelliJImg, alt: "IntelliJ" },  
  { src: vscodeImg, alt: "VS Code" },
];

function AboutMe() {
  return (
    <div className="about-container" id="about">
      <div className="about-left">
        <h1>About Me</h1>
        <p>
            Hello! My name is Marino, and I’m an aspiring software developer. I come from a background in customer service and sales, 
            where I honed skills like adaptability, problem-solving, and collaboration. These experiences now fuel my passion for 
            programming and my journey into the tech world.
        </p>
        <p><strong>Current Focus</strong></p>
        <ul>
          <li>
            <strong>Backend Development:</strong> Building small projects using Java and Kotlin to understand core programming principles, as well as exploring APIs and server-side logic.
          </li>
          <li>
            <strong>DevOps & Tools:</strong> Learning Docker and GitHub to manage code versioning, containerize applications, and streamline deployment workflows.
          </li>
          <li>
            <strong>Frontend Basics:</strong> Strengthening skills in HTML5, CSS3, and JavaScript for creating responsive, user-friendly interfaces.
          </li>
        </ul>
        <p>
          My current goal is to enhance my technical skills by working on personal projects and experimenting with technologies that excite me. 
          I’m also interested in contributing to open-source projects and collaborating with others to solve meaningful challenges. 
          This journey is driven by curiosity, determination, and a commitment to continuous learning.
        </p>
      </div>
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <img src={skill.src} alt={skill.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
