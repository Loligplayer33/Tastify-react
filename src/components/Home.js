import '../scss/home.scss';

import React, { useState } from 'react';

function Home() {
  const [input, setInput] = useState('');

  function searchResults(query) {
    console.log(query);
  }

  function handleClick(e) {
    console.log(e);
  }

  return (
    <div className="home">
      <div className="home__img-container">
        <h1 className="home__header">We got everything you need</h1>
        <div className="home__input-container">
          <input
            className="home__input"
            type="text"
            placeholder="f.e: Pizza, Lasagna, Salad"
            onKeyPress={(e) => {
              setInput(e.target.value);
              handleClick(e.keyCode);
            }}
          />
          <i
            className="home__search-icon fas fa-search fa-2x"
            onClick={searchResults(input)}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Home;
