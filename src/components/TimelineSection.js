import React from 'react';
import styles from './TimelineSection.module.css';
import TestimonialList from './TestimonialList';
import ContactCard from './ContactCard';
import WorkCard from './WorkCard';

function TimelineSection() {
  return (
    <section className={styles.timelineWrapper}>
      <div className={styles.timelineGrid}>
        {/* Left: Testimonials */}
        <div className={styles.left}>
          <TestimonialList />
        </div>

        {/* Right: Email + Work Cards */}
        <div className={styles.right}>
          <ContactCard />
          <WorkCard />
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
