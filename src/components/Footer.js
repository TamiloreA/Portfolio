import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link to="/">Resume</Link>
        <Link to="/about">About</Link>
        <a href="#projects">Projects</a>
      </div>
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} Tamilore Akinsola. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
