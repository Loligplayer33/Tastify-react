import React from 'react';
import { Link } from '@reach/router';
import s from './footer.module.scss';

function Footer() {
  return (
    <footer className={s.container}>
      <div className={s.contentContainer}>
        <p className={s.copy}>Copyright &copy; 2020. All Rights Reserved</p>

        <Link className={s.link} to="recipes">
          Recipes
        </Link>

        <Link className={s.link} to="inspiration">
          Inspiration
        </Link>

        <Link className={s.link} to="newsletter">
          Newsletter
        </Link>

        <Link className={s.link} to="connect">
          Contact
        </Link>
      </div>

      <div className={s.socialContainer}>
        <a href="https://twitter.com/?lang=de">
          <i className={`${s.social} fab fa-twitter`}></i>
        </a>

        <a href="https://www.instagram.com/?hl=de">
          <i className={`${s.social} fab fa-instagram`}></i>
        </a>

        <a href="https://de-de.facebook.com/">
          <i className={`${s.social} fab fa-facebook`}></i>
        </a>

        <a href="https://www.linkedin.com/">
          <i className={`${s.social} fab fa-linkedin`}></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
