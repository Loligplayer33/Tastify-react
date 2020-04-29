import React from 'react';
import s from './formComponents.module.scss';

// TODO make email valitdation work
// import { useState } from 'react';

function InputField({ HtmlFor, label }) {
  // const [email, setEmail] = useState('');

  return (
    <div className={s.inputContainer}>
      <label className={s.label} htmlFor={HtmlFor}>
        {label}
      </label>
      <input className={s.input} type={HtmlFor} />
    </div>
  );
}

export default InputField;
