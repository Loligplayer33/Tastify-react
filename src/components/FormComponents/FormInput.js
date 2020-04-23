import React from 'react';
import s from './formComponents.module.scss';

// TODO make email valitdatio work
// import { useState } from 'react';

function InputField({ HtmlFor, label }) {
  // const [email, setEmail] = useState('');

  return (
    <div className={s.inputContainer}>
      <label className={s.label} htmlFor={HtmlFor}>
        {label}
      </label>
      <input
        className={s.input}
        type={HtmlFor}
        // onKeyDown={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}

export default InputField;
