import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css'; // Custom CSS file for styling

const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const experiences = [
    {
      title: 'Graduate Engineer Trainee',
      company: 'BlackBox Network Services',
      companyUrl: 'https://www.blackbox.com',
      duration: '2022 - 2023',
      description: 'Gained experience in software development and contributed to various projects.',
    },
    {
      title: 'Junior Software Engineer',
      company: 'BlackBox Network Services',
      companyUrl: 'https://www.blackbox.com',
      duration: '2023 - current',
      description: 'Developing and maintaining web applications using React.js and Node.js.',
    },
  ];

  const resumeUrl = '/z66adcecc72346.pdf'; // Path to the resume in public directory

  return (
    <div className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="download-resume">
        <a href={resumeUrl} download="z66adcecc72346.pdf" className="btn-download-resume">
          Download My Full Resume
        </a>
      </div>
      <Slider {...settings}>
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3 className="experience-card-title">{exp.title}</h3>
            <p className="experience-card-company">{exp.company}</p>
            <p className="experience-card-duration">{exp.duration}</p>
            <p className="experience-card-description">{exp.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Experience;
