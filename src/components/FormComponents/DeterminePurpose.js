import s from './formComponents.module.scss';
import React from 'react';
import InputField from './FormInput';

function DeterminePurpose({ place }) {
  if (place === 'contact') {
    return (
      <>
        <InputField HtmlFor="Country" label="Country" />
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

export default DeterminePurpose;
