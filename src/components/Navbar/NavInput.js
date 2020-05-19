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
        onKeyPress={() => {
          isClicked();
          if (term !== '' || undefined) onSearch(term);
          setTerm('');
        }}
        onClick={() => {
          isClicked();
          if (term !== '' || undefined) onSearch(term);
          setTerm('');
        }}
        onBlur={() => {
          isClicked();
          if (term !== '' || undefined) onSearch(term);
          setTerm('');
        }}
      />
      <input
        className="nav__toggle-search input-field"
        type="text"
        placeholder="f.e: Pizza, Lasagna, Salad"
        onKeyUp={(e) => {
          if (e.which === 13) {
            isClicked();
            onSearch(e.target.value);
            removeTextContent(e);
            setTerm('');
          } else {
            setTerm(e.target.value);
          }
        }}
      />
    </div>
  );
}

export default NavInput;
