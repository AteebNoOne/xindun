import React from 'react';
import styles from './funcButtons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSyncAlt,
  faArrowAltCircleDown,
  faFileInvoiceDollar,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

const FuncButtons = () => {
  return (
    <div className={styles['buttons-container']}>
      <div className={styles.singlebtn}>
        <button style={{ backgroundColor: '#6868f1' }}>
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
        <span>Recharge</span>
      </div>
      <div className={styles.singlebtn}>
        <button style={{ backgroundColor: '#adad0c' }}>
          <FontAwesomeIcon icon={faArrowAltCircleDown} />
        </button>
        <span>Withdraw</span>
      </div>
      <div className={styles.singlebtn}>
        <button style={{ backgroundColor: '#c716c7' }}>
          <FontAwesomeIcon icon={faFileInvoiceDollar} />
        </button>
        <span>My Bill</span>
      </div>
      <div className={styles.singlebtn}>
        <button style={{ backgroundColor: '#10107c' }}>
          <FontAwesomeIcon icon={faUserCircle} />
        </button>
        <span>Account</span>
      </div>
    </div>
  );
};

export default FuncButtons;
