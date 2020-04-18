import React from 'react';
import s from './connect.module.scss';
import Content from '../FormComponents/Content';
import Form from '../FormComponents/Form';

function Connect() {
  return (
    <section className={s.container}>
      <Content
        heading="Contact"
        text="Contact us for more information or to get your questions answered."
      />
      <Form place="contact" />
    </section>
  );
}

export default Connect;
