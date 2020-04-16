import React from 'react';
import styles from './home.module.scss';
function HomeInput() {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="f.e: Pizza, Lasagna, Salad"
        onKeyDown={(e) => {
          if (e.which == 13) {
            <ProcessSearch event={e} />;
          }
        }}
      />

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <i
        className={`${styles.icon} fas fa-search fa-2x`}
        onClick={(e) => {
          if (e.type == 'click') {
            <ProcessSearch event={e} />;
          }
        }}
      ></i>
    </div>
  );
}

export default HomeInput;
