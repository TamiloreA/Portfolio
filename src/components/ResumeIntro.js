import React from 'react';
import styles from './ResumeIntro.module.css';
// import avatar from '../../assets/avatar.jpg'; 

function ResumeIntro() {
  return (
    <section className={styles.wrapper} id="resume">
      <div className={styles.container}>
        <div className={styles.left}>
          {/* <img src={avatar} alt="Tammy" className={styles.avatar} /> */}
        </div>

        <div className={styles.right}>
          <h1 className={styles.title}>
            Fullstack Developer, Tech Enthusiast, Musician, Photographer and amateur Gamer.
          </h1>

          <p className={styles.bio}>
            Hello, I'm Tammy, a full-stack developer passionate about building beautiful and functional web apps. 
            I’m also a musician, photographer, and gamer. I love solving real-world problems through code and creativity.
          </p>

          <div className={styles.socials}>
            <a href="https://x.com/tammyboi__?s=21&t=vEGfmypqeLoPDwjZy2Piow"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/real.tvmmyy?igsh=cXhvMnd3azZtaXhn&utm_source=qr"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/TamiloreA"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/tamilore-akinsola-b52a8736a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeIntro;
