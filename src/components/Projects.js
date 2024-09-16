// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="container my-5">
      <h2>Projects</h2>
      <div className="row">
        {/* Project 1 */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src="https://wallpapercave.com/wp/wp7730538.jpg" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">
                Customer Relationship Management (CRM) System | Frontend Developer (UI/UX)
              </h5>
              <p className="card-text">
                Led the development of a CRM system's user interface, creating reusable and modular components using React.js.
                Designed and developed dynamic dashboards to display real-time sales pipelines, customer interactions, and performance metrics.
                Integrated front-end components with backend services to ensure seamless data flow and up-to-date client information.
                Implemented responsive design to ensure the application was fully functional on desktops, tablets, and mobile devices.
                Collaborated with UI/UX designers to enhance user workflows, improving system usability and user engagement.
                Optimized the system’s performance by implementing lazy loading, resulting in faster page load times and improved user experience.
                Worked closely with backend teams to ensure the application met industry security standards, implementing role-based access control.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src="https://wallpapercave.com/wp/wp7730538.jpg" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">
                EmpTrack: Employee Performance Monitoring System
              </h5>
              <p className="card-text">
                Designed and developed the user interface for EmpTrack, an internal application to monitor employee performance, working hours, and project contributions.
                Developed interactive dashboards to provide real-time insights into performance metrics, working hours, and attendance.
                Created custom report generation features, enabling management to filter and analyze employee data by various criteria.
                Integrated front-end components with backend APIs, ensuring accurate and up-to-date data display.
                Implemented a responsive design, making the application accessible on desktops, tablets, and mobile devices, leading to high adoption among management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
