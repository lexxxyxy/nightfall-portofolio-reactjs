import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) return savedMode === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <style>{`
        :root {
          --bg-color: #fffaf0;
          --text-color: #333;
          --link-hover: #a57c6e;
          --transition-speed: 0.4s;
        }

        .dark {
          --bg-color: #1a1a1a;
          --text-color: #f5f5f5;
          --link-hover: #d1a054;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: var(--bg-color);
          color: var(--text-color);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          font-family: 'Noto Sans JP', sans-serif;
          transition: background-color var(--transition-speed) ease;
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
          color: var(--text-color);
          text-decoration: none;
          font-size: 1.4rem;
          font-weight: bold;
          transition: color var(--transition-speed) ease;
        }

        .menu-toggle {
          display: none;
          width: 30px;
          height: 24px;
          flex-direction: column;
          justify-content: space-between;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .menu-toggle span {
          display: block;
          width: 100%;
          height: 4px;
          background: var(--text-color);
          border-radius: 2px;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .nav-links li a {
          text-decoration: none;
          color: var(--text-color);
          font-size: 1rem;
          transition: color var(--transition-speed) ease;
        }

        .nav-links li a:hover,
        .mode-toggle:hover {
          color: var(--link-hover);
        }

        .mode-toggle {
          background: none;
          border: none;
          color: var(--text-color);
          font-size: 1rem;
          cursor: pointer;
          transition: color var(--transition-speed) ease;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }

          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--bg-color);
            padding: 1rem 0;
          }

          .nav-links.active {
            display: flex;
          }

          .nav-links li {
            padding: 0.5rem 0;
            text-align: center;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="container">
          <h1 className="logo">
            <a href="#home">Nightfall</a>
          </h1>

          <button
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </li>
            <li>
              <a href="#game" onClick={() => setIsMobileMenuOpen(false)}>Fav Game</a>
            </li>
            <li>
              <button
                className="mode-toggle"
                onClick={() => {
                  toggleDarkMode();
                  setIsMobileMenuOpen(false);
                }}
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
