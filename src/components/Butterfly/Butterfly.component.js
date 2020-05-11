import React from "react";
import styles from './Butterfly.module.css'

import BlueButterfly from "../../feature_butterflies/BlueButterfly.png";
import PinkButterfly from "../../feature_butterflies/PinkButterfly.png";
import YellowButterfly from "../../feature_butterflies/YellowButterfly.png";
import OrangeButterfly from "../../feature_butterflies/OrangeButterfly.png";
import PurpleButterfly from "../../feature_butterflies/PurpleButterfly.png";

const images = {BlueButterfly,
  PinkButterfly,
  YellowButterfly,
  OrangeButterfly,
  PurpleButterfly
}

const Butterfly = ({color, timestamp}) => {

  const imgPath = color + 'Butterfly'

  return (
    <div className={styles[color]}>
      <img className={styles["Butterfly"]} src={images[imgPath]}/>
    </div>
  )
}

export default Butterfly;
