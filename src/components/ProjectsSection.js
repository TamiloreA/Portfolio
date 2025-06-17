import React from 'react';
import styles from './ProjectsSection.module.css';
import projects from './projectsData';

function ProjectsSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Things I’ve made while playing around with code and stuff, trying to be a better developer.
        </h1>
        <p className={styles.subtext}>
          I've worked on tons of projects over the years but these are the ones that I’m most proud of.
          If you see something that piques your interest, feel free to click on it and play around.
          The code and live link is also available on my Github.
        </p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <img src={project.icon} alt={project.name} className={styles.icon} />
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.desc}>{project.description}</p>
              <div className={styles.links}>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-link"></i> {project.live}
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> {project.github}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
