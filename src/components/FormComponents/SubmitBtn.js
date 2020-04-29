import React from 'react';
import s from './formComponents.module.scss';

function SubmitBtn({ place }) {
  function determineBtnContent(place) {
    return place === 'contact' ? 'Send the message' : 'Subscribe';
  }

  return (
    <>
      {/* TODO add email validation (need email state from FormInput.js)
    Don't know how to pass it down*/}
      <button className={s.button}>{determineBtnContent(place)}</button>
    </>
  );
}

export default SubmitBtn;
