import React from 'react';
import styles from './TestimonialList.module.css';
import testimonials from './testimonialsData';

function TestimonialList() {
  return (
    <div className={styles.wrapper}>
      {testimonials.map((item, index) => (
        <div key={index} className={styles.testimonial}>
          <p className={styles.date}><span>|</span> {item.date}</p>
          <p className={styles.text}>{item.text}</p>
          <p className={styles.company}><strong>({item.company})</strong></p>
        </div>
      ))}
    </div>
  );
}

export default TestimonialList;
