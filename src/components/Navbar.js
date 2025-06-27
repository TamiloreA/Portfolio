import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import avatar from '../assets/img20.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference
    return localStorage.getItem('darkMode') === 'true' || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('darkMode'));
  });

  useEffect(() => {
    // Apply dark mode class and save preference
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbarContainer}>
        <div className={styles.left}>
          <img src={avatar} alt="Avatar" className={styles.avatar} />
        </div>
        <div className={styles.center}>
          <div className={styles.navbar}>
            <Link to="/">Resume</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>
        </div>
        <div className={styles.right}>
          <button onClick={toggleDarkMode} className={styles.themeBtn}>
            <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;