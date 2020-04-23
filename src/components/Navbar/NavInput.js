import React, { useState } from 'react';
import './navbar.scss';

function NavInput({ onSearch }) {
  const [click, setClick] = useState(false);
  const [term, setTerm] = useState('');

  function removeTextContent(e) {
    e.target.value = '';
  }

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
    <div className="nav__search-container">
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <i
        className="nav__search fas fa-search fa-2x"
        onKeyPress={(e) => {
          isClicked(e);
          onSearch(term);
          removeTextContent(e);
        }}
        onClick={(e) => {
          isClicked(e);
          onSearch(term);
          removeTextContent(e);
        }}
        onBlur={(e) => {
          isClicked(e);
          onSearch(term);
          removeTextContent(e);
        }}
      />
      <input
        className="nav__toggle-search input-field"
        type="text"
        placeholder="f.e: Pizza, Lasagna, Salad"
        onKeyPress={(e) => {
          if (e.which === 13) {
            onSearch(term);
            removeTextContent(e);
          } else {
            setTerm(e.target.value);
          }
        }}
      />
    </div>
  );
}

export default NavInput;
