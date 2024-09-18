import React, { useState } from 'react';
import '../App.css'; // Updated to use App.css

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
    // Handle sending query to your mail via backend (use nodemailer or similar)
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Jyoti Ranjan Sethi</h1>
          <p>Full Stack Developer</p>
        </div>
      </header>

      {/* Social Media Links */}
      <section className="social-links">
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
    <i className="fab fa-instagram"></i> {/* Instagram icon */}
  </a>
  <a href="https://discord.com/channels/@me/1218420780833050696" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-discord"></i> {/* Discord icon */}
  </a>
</section>


      {/* Query Form Section */}
      <section className="query-form-section">
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
