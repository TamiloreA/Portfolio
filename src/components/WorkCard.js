import React from 'react';
import styles from './WorkCard.module.css';
import workData from './workData';

function WorkCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}><i class="fa-solid fa-building"></i> Work</h3>
      {workData.map((job, index) => (
        <div key={index} className={styles.job}>
          <a href='https://thecodecenter.org'><div className={styles.left}>
            <img src={job.logo} alt={job.company} className={styles.logo} />
            <div className={styles.info}>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.role}>{job.title}</p>
            </div>
          </div></a>
          <div className={styles.right}>
            <p className={styles.duration}>{job.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkCard;
