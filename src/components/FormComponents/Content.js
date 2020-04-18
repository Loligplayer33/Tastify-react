import React from 'react';
import s from './formComponents.module.scss';

function Content({ heading, text }) {
  return (
    <div className={s.containerLeft}>
      <h1 className={s.heading}>{heading}</h1>
      <p className={s.content}>{text}</p>
    </div>
  );
}

export default Content;
