import '../../scss/reset.scss';
import s from './formComponents.module.scss';

import React from 'react';
import InputFields from './InputFields';
import Submit from './SubmitBtn';

function DeterminePurpose({ place }) {
  if (place === 'contact') {
    return (
      <>
        <InputFields HtmlFor="Country" label="Country" />
        <div className={s.textareaContainer}>
          <label className={s.label} htmlFor="textarea">
            Message
          </label>
          <textarea
            className={s.textarea}
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </>
    );
  } else {
    return null;
  }
}

function Form({ place }) {
  return (
    <div className={s.containerRight}>
      <form className={s.form}>
        <InputFields HtmlFor="name" label="First Name*" />
        <InputFields HtmlFor="name" label="Last Name*" />
        <InputFields HtmlFor="email" label="Email - Adress*" />
        <DeterminePurpose place={place} />
      </form>
      <Submit text="Send the Message" />
    </div>
  );
}

export default Form;
