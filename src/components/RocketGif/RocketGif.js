import React from 'react';
import styles from './RocketGif.module.css';
import rocket from '../../assets/rocket.gif';

const RocketGif = () => {
  return (
    <div className={styles.rocketContainer}>
      <div className={styles.gifContainer}>
        <img className={styles.rocketGif} src={rocket} alt="Rocket" />
        <h1 className={styles.heading}>ROCKET 24H</h1>
        <div className={styles.textContainer}>
          <p className={styles.paragraph}>
            Welcome to the family
          </p>
          <h2 className={styles.subHeading}>
            More about rockets
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RocketGif;
