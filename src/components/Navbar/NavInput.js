import React, { useState } from 'react';

function NavInput({ onSearch }) {
  const [click, setClick] = useState(false);
  const [term, setTerm] = useState('');

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
      links.forEach(link => (link.style.display = 'none'));
    } else if (click === true) {
      links.forEach(link => (link.style.display = 'block'));
      navbar.style.justifyContent = 'space-around';
      toggleInput.style.display = 'none';
    }
  }

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <i
        className="nav__search fas fa-search fa-2x"
        onKeyDown={e => {
          isClicked(e);
          onSearch(term);
        }}
        onClick={e => {
          isClicked(e);
          onSearch(term);
        }}
        onBlur={e => {
          isClicked(e);
          onSearch(term);
        }}
      />
      <input
        className="nav__toggle-search input-field"
        type="text"
        placeholder="f.e: Pizza, Lasagna, Salad"
        onChange={e => {
          if (e.which === 13) {
            onSearch(term);
          } else {
            setTerm(e.target.value);
          }
        }}
      />
    </div>
  );
}

export default NavInput;
