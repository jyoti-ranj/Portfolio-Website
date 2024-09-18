import React from 'react';
import '../App.css';

function Resume() {
  const resumeUrl = `${process.env.PUBLIC_URL}/Jyoti_Ranjan_Resume.pdf`; // Or use '/Jyoti_Ranjan_Sethi_Resume.pdf' directly

  return (
    <div className="resume-section">
      <h2>Resume</h2>
      <iframe
        src={resumeUrl}
        title="Resume Preview"
        className="resume-preview"
        width="100%"
        height="600px"
      ></iframe>
      <a href={resumeUrl} download="Jyoti_Ranjan_Sethi_Resume.pdf" className="btn btn-primary">
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
