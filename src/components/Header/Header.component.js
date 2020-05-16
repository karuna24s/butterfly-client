import React from "react";
import styles from "./Header.module.css";
import { Col, Row } from "reactstrap";

const Header = ({ handwashing }) => {
  return (
    <div>
      <Row className={styles.containerFlex}>
        <Col>
          <p id={styles.header}>We are with you.</p>
        </Col>

        <Col>
          <figure style={{ textAlign: "center", paddingTop: "15px" }}>
            <img
              src={handwashing}
              id={styles.handwashing}
              alt="Handwashing"
            ></img>
            <figcaption id={styles.subheader}>
              We will overcome COVID 19
            </figcaption>
          </figure>
        </Col>
      </Row>
      <Row className={styles.optionalRow}>
        <div>
          <p id={styles.optionalParagraph}>We will overcome COVID 19</p>
        </div>
      </Row>
    </div>
  );
};

export default Header;
