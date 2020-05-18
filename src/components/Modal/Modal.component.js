import React from "react";
import styles from "./Modal.module.css";

const InfoModal = ({ toggleModal }) => {
  return (
    <div className={styles.infoModal}>
      <div className={styles.infoModalContent}>
        <div className={styles.modalHeader}>
          <span className={styles.close} onClick={toggleModal}>
            &times;
          </span>
          <h2>Welcome to Support Butterflies</h2>
        </div>
        <div className={styles.modalBody}>
          <p>
            Please help us support our medical professionals and essential
            workers during this time of crisis. Each butterfly is a button that
            when clicked displays a <em>flying butterfly </em>
            representing a special message of gratitude. We believe that showing
            appreciation is the least we can do. So if you're stuck at home and
            wish you could do more, just click. And then keep clicking!
          </p>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.modalButton} onClick={toggleModal}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
