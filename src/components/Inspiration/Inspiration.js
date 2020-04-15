import React from 'react';
import styles from './inspiration.module.scss';

console.log(styles);

function Inspiration() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Inspiration</h1>
      <h2 className={styles.headerSmall}>Inspiration</h2>
      <p className={styles.test}>Hi there</p>
    </div>
  );
}

export default Inspiration;
