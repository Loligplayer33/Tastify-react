/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../scss/home.scss';

import React, { useState, useEffect } from 'react';
import Search from '../Api/Search';

function Home() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState({});

  async function handleQuery(key) {
    if (key.which == 13) {
      console.log('mhh');
      var query = await new Search(input).getResults();
      setQuery(query);
    }
  }

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div className="home">
      <div className="home__img-container">
        <h1 className="home__header">We got everything you need</h1>
        <div className="home__input-container">
          <input
            className="home__input"
            type="text"
            placeholder="f.e: Pizza, Lasagna, Salad"
            onKeyDown={(e) => {
              setInput(e.target.value);
              handleQuery(e);
            }}
          />

          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <i
            className="home__search-icon fas fa-search fa-2x"
            onClick={() => {
              console.log(input);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Home;
