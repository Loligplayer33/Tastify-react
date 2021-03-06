import React from 'react';
import s from './formComponents.module.scss';

function InputField({ HtmlFor, label }) {
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
