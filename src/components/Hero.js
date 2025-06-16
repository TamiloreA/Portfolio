import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Hello, I'm Tammy</h1>
        <h2>Frontend Developer</h2>
        <p>I build modern and responsive web experiences using React, Node.js, and MySQL.</p>
        <a href="#projects" className={styles.button}>View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
