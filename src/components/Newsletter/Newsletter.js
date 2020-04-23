import React from 'react';
import Content from '../FormComponents/Content';
import Form from '../FormComponents/Form';
import s from './newsletter.module.scss';

function Newsletter() {
  return (
    <section className={s.container}>
      <Content
        heading="Newsletter"
        text="Be the first to get updates about our Service."
      />
      <Form place="newsletter" />
    </section>
  );
}

export default Newsletter;
