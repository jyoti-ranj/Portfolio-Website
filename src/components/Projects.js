import React from 'react';
import '../App.css'; // Custom CSS file for styling

const Projects = () => {
  return (
    <section id="projects" className="projects-section container my-5">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">BlackBox Network Services</p>
      <div className="row project-grid">
        {/* Project 1 */}
        <div className="col-md-4 mb-4">
          <div className="project-item">
            <img
              src="https://wallpapercave.com/wp/wp7730538.jpg"
              className="project-img"
              alt="CRM System"
            />
            <div className="project-info">
              <h5 className="project-title">Customer Relationship Management (CRM) System</h5>
              <p className="project-role">Graduate Engineer Trainee</p>
              <p className="project-description">
                Led the development of a CRM system's UI, creating reusable components using React.js.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4 mb-4">
          <div className="project-item">
            <img
              src="https://wallpapercave.com/wp/wp7730538.jpg"
              className="project-img"
              alt="EmpTrack"
            />
            <div className="project-info">
              <h5 className="project-title">EmpTrack: Employee Performance Monitoring System</h5>
              <p className="project-role">Junior Software Engineer</p>
              <p className="project-description">
                Developed a user interface for EmpTrack, an app to monitor employee performance.
              </p>
            </div>
          </div>
        </div>

        {/* Add more project items as necessary */}
      </div>
      <p className="portfolio-footer">BY WEBSTUFF</p>
    </section>
  );
};

export default Projects;
