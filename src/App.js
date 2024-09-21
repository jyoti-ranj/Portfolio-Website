import { Outlet } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import JS for Bootstrap functionality
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contacts';
import Searchbar from './components/Searchbar';
import HomePage from './components/HomePage';


const Layout = () => {
  return (
    <>
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
          <div className="container">
            {/* Navbar Brand / Logo */}
            <a className="navbar-brand" href="#">Jyoti Ranjan Sethi</a>

            {/* Toggler for Mobile View */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto"> {/* Center-aligned navbar links */}
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link> {/* Link to homepage */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Me</Link> {/* New About Me route */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/skills">Skills</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/experience">Experience</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Content of the routes will be rendered here */}
        <Searchbar /> {/* Searchbar component will be displayed on every page */}
        <Outlet /> {/* This will render the current route's component */}
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} Jyoti Ranjan Sethi. All rights reserved.</p>
      </footer>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Layout will be used as a wrapper for all routes */}
          <Route path="/" element={<Layout />}>
            {/* Define index as homepage */}
            <Route index element={<HomePage />} /> {/* HomePage is now the index */}
            <Route path="about" element={<AboutMe />} /> {/* About Me moved to /about */}
            <Route path="skills" element={<Skills />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="SmoothScroll" element={<SmoothScroll />} />
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
