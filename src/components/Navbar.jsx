import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Cek localStorage dulu
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) return savedMode === 'true';

    // Fallback ke preferensi sistem
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      return true;

    return false;
  });

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const navLinksRef = useRef(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Simpan ke localStorage dan tambahkan kelas ke body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  // Hamburger animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      anime({
        targets: line1Ref.current,
        rotate: 45,
        translateY: 8,
        duration: 300,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: line2Ref.current,
        opacity: 0,
        duration: 300,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: line3Ref.current,
        rotate: -45,
        translateY: -8,
        duration: 300,
        easing: 'easeInOutQuad',
      });

      anime({
        targets: navLinksRef.current.children,
        opacity: [0, 1],
        translateY: [-10, 0],
        delay: anime.stagger(100),
        duration: 400,
        easing: 'easeOutQuad',
      });
    } else {
      anime({
        targets: line1Ref.current,
        rotate: 0,
        translateY: 0,
        duration: 300,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: line2Ref.current,
        opacity: 1,
        duration: 300,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: line3Ref.current,
        rotate: 0,
        translateY: 0,
        duration: 300,
        easing: 'easeInOutQuad',
      });
    }
  }, [isMobileMenuOpen]);

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
          width: 100%;
          top: 0;
          left: 0;
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
          width: 30px;
          height: 24px;
          display: none;
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
          transition: all 0.3s ease;
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
          color: var(--text-color);
          font-size: 1rem;
          transition: color var(--transition-speed) ease;
        }

        .nav-links li a:hover {
          color: var(--link-hover);
        }

        .mode-toggle {
          background: none;
          border: none;
          color: var(--text-color);
          font-size: 1.2rem;
          cursor: pointer;
          margin-left: 1rem;
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
        }
      `}</style>

      <nav className="navbar">
        <div className="container">
          <h1 className="logo">
            <a href="#home">Nightfall</a>
          </h1>

          {/* Hamburger Button */}
          <button
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
          >
            <span ref={line1Ref}></span>
            <span ref={line2Ref}></span>
            <span ref={line3Ref}></span>
          </button>

          {/* Nav Links */}
          <ul
            ref={navLinksRef}
            className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
          >
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
            
          {/* Dark Mode Toggle */}
          <button
            className="mode-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;