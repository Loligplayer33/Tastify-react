import './navbar.scss';

import React, { useState } from 'react';
import { Link } from '@reach/router';

import ProcessSearch from '../Search/ProcessSearch';

// TODO do this with classes (reference slack)

function Navbar() {
  const [click, setClick] = useState(false);

  // set state for controlDomOnClick
  function isClicked() {
    click === false ? setClick(true) : setClick(false);
    controlDomOnClick(click);
  }

  function controlDomOnClick(click) {
    var links = document.querySelectorAll('.nav__link');
    var navbar = document.querySelector('.nav');
    var toggleInput = document.querySelector('.nav__toggle-search');

    if (click === false) {
      navbar.style.justifyContent = 'left';
      toggleInput.style.display = 'block';
      links.forEach((link) => (link.style.display = 'none'));
    } else if (click === true) {
      links.forEach((link) => (link.style.display = 'block'));
      navbar.style.justifyContent = 'space-around';
      toggleInput.style.display = 'none';
    }
  }

  return (
    <nav className="nav">
      <div className="nav-logo--container">
        {/* {route to main page} */}
        <Link to="/">
          <i className="nav__logo fas fa-utensils fa-5x">Tastify</i>
        </Link>
      </div>
      {/* route to the pages */}
      <Link className="nav__link nav__link--middle" to="recipes">
        Recipes
      </Link>

      <Link className="nav__link nav__link--middle" to="inspiration">
        Inspiration
      </Link>

      <Link className="nav__link nav__link--middle" to="newsletter">
        Newsletter
      </Link>

      <Link className="nav__link nav__link--btn" to="connect">
        Connect with us
      </Link>

      {/* a problem may occur here */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <i
        className="nav__search fas fa-search fa-2x"
        onKeyDown={(e) => {
          isClicked(e);
        }}
        onClick={(e) => {
          isClicked(e);
          if (e.type == 'click') {
            <ProcessSearch event={e} />;
          }
        }}
        onBlur={(e) => {
          isClicked(e);
        }}
      ></i>
      <input
        className="nav__toggle-search input-field"
        type="text"
        placeholder="f.e: Pizza, Lasagna, Salad"
        onChange={(e) => {
          if (e.which == 13) {
            <ProcessSearch event={e} />;
          }
        }}
      />
    </nav>
  );
}

export default Navbar;
