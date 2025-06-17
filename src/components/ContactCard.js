import React from 'react';
import styles from './ContactCard.module.css';

function ContactCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}><i class="fa-regular fa-envelope"></i> Send me an Email</h3>
      <p className={styles.text}>
        Just can't get enough of me? Send me an email and I'll get back to you as soon as possible!
      </p>
      <a href='mailto:tamiloreakinsola@gmail.com' className={styles.email}>tamiloreakinsola@gmail.com</a>
    </div>
  );
}

export default ContactCard;
