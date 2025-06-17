import React, { useState } from 'react';
import styles from './Navbar.module.css';
import avatar from '../assets/img20.png';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark');
  };

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbarContainer}>

        {/* Left - Avatar */}
        <div className={styles.left}>
          <img src={avatar} alt="Avatar" className={styles.avatar} />
        </div>

        {/* Center - Links */}
        <div className={styles.center}>
          <div className={styles.navbar}>
            <a href="#resume">Resume</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </div>
        </div>

        {/* Right - Dark Mode Icon */}
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
