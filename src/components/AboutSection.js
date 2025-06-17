import React from 'react';
import styles from './AboutSection.module.css';
import techStack from './techStack';
import aboutImage from '../assets/IMG_2348.HEIC';

function AboutSection() {
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.container}>

        {/* Left - Textual Intro */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            <span role="img" aria-label="wave">👋</span> Hi, I'm <span className={styles.name}>Tamilore Akinsola</span> it's<br />
            pronounced <span className={styles.phonetic}>"ta-mee-lore"</span>. I love to<br />
            <span className={styles.highlight}>build things for the web.</span>
          </h2>

          <p className={styles.paragraph}>
            I've loved building things for as long as I can remember. My passion for software has led me to a career in web engineering. 
            I've built full-stack apps using React, Node.js, MySQL, Express and more. I enjoy tackling meaningful problems and learning new technologies.
          </p>

          <p className={styles.easterEgg}>
            <strong>PS - You wanna see something cool?</strong> While on this page, use the <span className={styles.konami}>“KONAMI”</span> code.
          </p>

          <p className={styles.stackIntro}>
            Here are a few technologies I've been working with recently:
          </p>

          <div className={styles.techGrid}>
            {techStack.map((tech, index) => (
              <div key={index} className={styles.techItem}>
                <img src={tech.logo} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image + Social Links */}
        <div className={styles.right}>
          <img src={aboutImage} alt="Tammy in forest" className={styles.image} />
          <ul className={styles.socialList}>
            <li><a href="https://www.linkedin.com/in/tamilore-akinsola-b52a8736a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fa-brands fa-linkedin"></i></a> Follow me on LinkedIn</li>
            <li><a href="https://github.com/TamiloreA"><i className="fa-brands fa-github"></i></a> Follow me on GitHub</li>
            <li><a href="https://x.com/tammyboi__?s=21&t=vEGfmypqeLoPDwjZy2Piow"><i className="fa-brands fa-twitter"></i></a> Follow me on Twitter</li>
            <li><a href="https://www.instagram.com/real.tvmmyy?igsh=cXhvMnd3azZtaXhn&utm_source=qr"><i className="fa-brands fa-instagram"></i></a> Follow me on Instagram</li>
            <hr/>
            <li><a href='mailto: tamiloreakinsola@gmail.com'><i className="fa-solid fa-envelope"></i> tamiloreakinsola@gmail.com</a></li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
