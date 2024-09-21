import React, { useState } from 'react';
import '../App.css'; // Ensure you have custom styling in App.css

function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle sending query via the backend
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="hero-name">Jyoti</span>,
            <br />
            web developer
          </h1>
          <p className="hero-subtitle">Front End Developer / Full Stack Enthusiast</p>
          <a href="#contact" className="contact-btn">
            Contact me!
          </a>
        </div>
      </header>

      {/* Social Media Links */}
      <nav className="social-links">
        <a href="https://github.com/jyoti-ranj" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/jyoti-ranjan-sethi-%F0%9F%87%AE%F0%9F%87%B3-355a84205/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/grin_with_heart?t=vsps9GajT_WVq-FwXeF1Ag&s=09" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/joytiranjan.sethi.3?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/jyoti_ranjan15?igsh=cnhlemZ6eGVtcXR4" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://discord.com/channels/@me/1218420780833050696" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-discord"></i>
        </a>
      </nav>

      {/* Query Form Section */}
      <section id="contact" className="query-form-section">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default HomePage;
