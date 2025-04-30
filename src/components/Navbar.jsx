import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1000;
          background-color: #fffaf0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          font-family: 'Noto Sans JP', sans-serif;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1100px;
          margin: auto;
          padding: 1rem 1.5rem;
        }

        .logo a {
          color: #333;
          text-decoration: none;
          font-size: 1.4rem;
          font-weight: bold;
        }

        .menu-toggle {
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
          display: none;
        }

        .menu-toggle:hover {
          color: #a57c6e;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: #333;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .nav-links li a:hover {
          color: #a57c6e;
        }

      @media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fffaf0;
    padding: 1rem 0;
  }

  .nav-links.active {
    display: flex;
  }
}

      `}</style>

      <nav className="navbar">
        <div className="container">
          <h1 className="logo">
            <a href="#home">Nightfall</a>
          </h1>

          {/* Hamburger */}
          <button 
            className="menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
          >
            ☰
          </button>

          {/* Nav Links */}
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
            <li><a href="#game" onClick={() => setIsMobileMenuOpen(false)}>Fav Game</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
