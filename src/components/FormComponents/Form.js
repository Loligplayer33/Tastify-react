import '../../scss/reset.scss';
import s from './formComponents.module.scss';

import React from 'react';
import InputField from './FormInput';
import Submit from './SubmitBtn';
import DeterminePurpose from './DeterminePurpose';

function Form({ place }) {
  return (
    <div className={s.containerRight}>
      <form className={s.form}>
        <InputField HtmlFor="name" label="First Name*" />
        <InputField HtmlFor="name" label="Last Name*" />
        <InputField HtmlFor="email" label="Email - Adress*" />
        <DeterminePurpose place={place} />
      </form>
      <Submit place={place} />
      <Submit place={place} />
    </div>
  );
}

export default Form;
