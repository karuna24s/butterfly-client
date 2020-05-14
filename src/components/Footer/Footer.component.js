import React from 'react';
import styles from "./Footer.module.css";

const Footer = ({ toggleModal }) => {
  return (
    <div className={styles.footer}>
      <p className={styles.copy}>&copy; 2020</p>
      <button className={styles.infoButton} onClick={toggleModal}><span className={styles.qMark}></span>info</button>
    </div>
  )
}

export default Footer;
