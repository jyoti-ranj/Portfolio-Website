import React from 'react';
import '../App.css'; // Ensure you have this CSS file in the same directory

const AboutMe = () => {
  return (
    <section id="about" className="about-me container my-5">
      <h2 className="section-title mb-4">About Me</h2>
      <div className="about-content row">
        <div className="col-md-8">
          <p>
            Hello! I'm Jyoti Ranjan Sethi, a passionate Full Stack Developer with two years of experience specializing in React.js and Node.js. My journey in technology began with a strong foundation in HTML, CSS, and JavaScript, and has evolved to encompass a diverse skill set including MongoDB, TypeScript, and various backend technologies.
            <br /><br />
            Currently, I am honing my expertise at Black Box in Bengaluru, where I started as a Graduate Engineering Trainee and was promoted to Junior Software Engineer. In my role, I focus on developing robust applications and collaborating with cross-functional teams to deliver high-quality solutions. One of my significant projects includes the development of an Employee Performance and Tracking System, where I contribute to the UI design and overall functionality.
            <br /><br />
            My educational background is complemented by a comprehensive web development course from upGrad, covering a range of technologies from React.js and Node.js to MongoDB and Express.js. This training has provided me with a solid understanding of modern web development practices and has fueled my enthusiasm for building innovative and user-centric applications.
            <br /><br />
            Beyond my technical skills, I am an avid learner and enjoy staying updated with the latest industry trends. I am also exploring ways to enhance my personal website, aiming to create an engaging platform that showcases my skills, projects, and experience. Key features of my site include user authentication, real-time chat, and a private admin dashboard.
            <br /><br />
            When I’m not coding, I love documenting my experiences through videos and sharing my journey with others. I’m also considering getting a tattoo as a reminder to stay patient and positive, reflecting my personal growth and mindset.
            <br /><br />
            Thank you for visiting my site. I look forward to connecting with you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
