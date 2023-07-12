import React from 'react';
import styles from './News.module.css';
import newsIcon from '../../assets/news.png'

const News = () => {
  return (
    <div className={styles.container}>
      <img src={newsIcon} className={styles.icon} alt=''/>
      <p className={styles.paragraph}>
        This is the news paragraph. 
      </p>
    </div>
  );
};

export default News;
