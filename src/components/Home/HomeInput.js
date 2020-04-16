import React, { useState } from 'react';
import styles from './home.module.scss';
function HomeInput({ onSearch }) {
  const [term, setTerm] = useState('');

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="f.e: Pizza, Lasagna, Salad"
        onKeyDown={e => {
          if (e.which === 13) {
            //onSearch fn coming from home.js calling api | term = input query
            onSearch(term);
          } else {
            // otherwise update state accordingly to input
            setTerm(e.target.value);
          }
        }}
      />

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <i
        className={`${styles.icon} fas fa-search fa-2x`}
        onClick={() => {
          //onSearch fn coming from home.js calling api | term = input query
          onSearch(term);
        }}
      />
    </div>
  );
}

export default HomeInput;
