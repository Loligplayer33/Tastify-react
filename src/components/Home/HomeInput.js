/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styles from './home.module.scss';

function HomeInput({ onSearch }) {
  const [term, setTerm] = useState('');

  function removeTextContent(e) {
    e.target.value = '';
  }

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="f.e: Pizza, Lasagna, Salad"
        onKeyUp={(e) => {
          if (e.which === 13) {
            //onSearch fn coming from home.js calling api | term = input-query
            onSearch(e.target.value);
            removeTextContent(e);
          } else {
            setTerm(e.target.value);
          }
        }}
      />

      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <i
        className={`${styles.icon} fas fa-search fa-2x`}
        onClick={(e) => {
          //onSearch fn coming from home.js calling api | term = input query
          onSearch(term);
          removeTextContent(e);
        }}
        key={term}
      />
    </div>
  );
}

export default HomeInput;
