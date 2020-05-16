import React from 'react';
import s from './formComponents.module.scss';

function SubmitBtn({ place }) {
  function determineBtnContent(place) {
    return place === 'contact' ? 'Send the message' : 'Subscribe';
  }

  return (
    <>
      <button className={s.button}>{determineBtnContent(place)}</button>
    </>
  );
}

export default SubmitBtn;
