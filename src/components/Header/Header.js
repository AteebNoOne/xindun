import React from 'react';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`bg-black d-flex align-items-center py-2 ${styles.header}`}>
      <div className={`${styles.verticalLine} `} />
      <img src={logo} alt="Logo" className={`${styles.logo} ${styles.logo}`} />
      <div className={`ms-auto ${styles.textWhite}`}>
        <h2 className={styles.heading}>Rs. 782.32</h2>
        <p className={styles.paragraph}>Account Balance</p>
      </div>
    </header>
  );
};

export default Header;
