import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects'; // Import the Projects component
import AboutMe from './components/AboutMe'; 
import Skills from './components/Skills'; 
import Experience from './components/Experience'; 
import Contact from './components/Contacts'; 
 

const App = () => {
  return (
    <div className="App">
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
                  <a className="nav-link" href="#about">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">Experience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>

              {/* Search Bar */}
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>

              </form>
            </div>
          </div>
        </nav>
      </header>


      <main>
       <AboutMe/>
        <Projects />
        <Skills/>
        <Experience/>
        <Contact/>
         {/* Render the Projects component */}
</main>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} Jyoti Ranjan Sethi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
