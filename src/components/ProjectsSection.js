import React from 'react';
import styles from './ProjectsSection.module.css';
import projects from './projectsData';
import { motion } from 'framer-motion';

function ProjectsSection() {
  return (
    <motion.section
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Things I’ve made while playing around with code and stuff, trying to be a better developer.
        </motion.h1>

        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I've worked on tons of projects over the years but these are the ones that I’m most proud of.
          If you see something that piques your interest, feel free to click on it and play around.
        </motion.p>

        <motion.div
          className={styles.grid}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
