import React from 'react';
import s from './formComponents.module.scss';

function SubmitBtn({ text }) {
  return (
    <>
      <button className={s.button}>{text}</button>
    </>
  );
}

export default SubmitBtn;
