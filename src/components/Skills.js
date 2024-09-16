import React from 'react';
// import { FaJava, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="container my-5">
          <h2>Skills</h2>
          <div className="row">
            <div className="col-md-6">
              <h4><i className="fab fa-java"></i> Programming Languages</h4>
              <div>
                <p><i className="fab fa-java"></i> Java</p>
                <p><i className="fab fa-js"></i> JavaScript</p>
                <p><i className="fab fa-ts"></i> TypeScript</p>
              </div>
            </div>
            <div className="col-md-6">
              <h4><i className="fab fa-react"></i> Front-end Development</h4>
              <div>
                <p><i className="fab fa-html5"></i> HTML5</p>
                <p><i className="fab fa-css3-alt"></i> CSS3</p>
                <p><i className="fab fa-js"></i> JavaScript</p>
                <p><i className="fab fa-react"></i> React.js</p>
              </div>
            </div>
            <div className="col-md-6">
              <h4><i className="fab fa-node"></i> Back-end Development</h4>
              <div>
                <p><i className="fab fa-node-js"></i> Node.js</p>
                <p><i className="fas fa-server"></i> Express.js</p>
              </div>
            </div>
            <div className="col-md-6">
              <h4><i className="fas fa-database"></i> Database Management</h4>
              <div>
                <p><i className="fas fa-database"></i> MongoDB</p>
                <p><i className="fas fa-database"></i> MySQL</p>
                <p><i className="fas fa-database"></i> PostgreSQL</p>
                <p><i className="fas fa-database"></i> Oracle RDBMS</p>
              </div>
            </div>
            <div className="col-md-6">
              <h4><i className="fab fa-git"></i> Version Control</h4>
              <div>
                <p><i className="fab fa-git"></i> Git</p>
                <p><i className="fab fa-github"></i> GitHub</p>
              </div>
            </div>
            <div className="col-md-6">
              <h4><i className="fas fa-tools"></i> Tools & Technologies</h4>
              <div>
                <p><i className="fas fa-code"></i> VS Code</p>
                <p><i className="fas fa-terminal"></i> IntelliJ IDEA</p>
                <p><i className="fas fa-envelope"></i> Postman</p>
                <p><i className="fas fa-cogs"></i> npm</p>
                <p><i className="fas fa-cogs"></i> Yarn</p>
              </div>
            </div>
            <div className="col-md-12">
              <h4><i className="fas fa-laptop-code"></i> Additional Skills</h4>
              <div>
                <p><i className="fas fa-cloud"></i> RESTful APIs</p>
                <p><i className="fas fa-mobile-alt"></i> Responsive Web Design</p>
                <p><i className="fas fa-project-diagram"></i> Agile Development</p>
              </div>
            </div>
          </div>
        </section>
  );
}

export default Skills;
