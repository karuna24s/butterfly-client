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
            This website was built with the intention of supporting healthcare
            workers and essential workers worldwide who are fighting the
            COVID-19 pandemic and risking their health to support the rest of us
            during this time. We want to let them know that we think of them
            often and are grateful for all the work that they do.
          </p>
          {/* <p>
            Each butterfly is a button that when clicked displays a butterfly
            representing the messages below the buttons. To be a part of this
            butterfly gratitude movement, all you have to do is click a button
            as much as you like for as long as you like. We believe that showing
            appreciation during this time is the least we could do so if you
            feel like you wish you could do more, just click. And then keep
            clicking.
          </p> */}
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
