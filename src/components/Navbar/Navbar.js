import './navbar.scss';

import React from 'react';
import { Link } from '@reach/router';
import Search from '../Search/apiSearch';
import NavInput from './NavInput';

// TODO do this with classes (reference slack)

function Navbar() {
  async function onSearch(term) {
    if (term !== '' || undefined) {
      await new Search(term).getResults();
    }
  }

  return (
    <nav className="nav">
      <div className="nav-logo--container">
        {/* {route to main page} */}
        <Link to="/">
          {/* <i className="nav__logo fas fa-utensils fa-5x">Tastify</i> */}
          <h1 className="nav__logo">Tastify</h1>
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

      <NavInput onSearch={onSearch} />
    </nav>
  );
}

export default Navbar;
