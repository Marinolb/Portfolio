import React from "react";
import soon from '../assets/images/soon.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects (Under construction)</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={soon} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Project 1</h2></a>
                <p>Placeholder for the project description.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={soon} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Project 2</h2></a>
                <p>Placeholder for the project description.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={soon} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Project 3</h2></a>
                <p>Placeholder for the project description.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;