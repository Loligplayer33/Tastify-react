/* eslint-disable jsx-a11y/no-static-element-interactions */
import './home.scss';
import ProcessSearch from '../Search/ProcessSearch';

import React from 'react';

function Home() {
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
              // TODO problem by calling hook inside event handler (qusetion)
              ProcessSearch(e);
            }}
          />

          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <i
            className="home__search-icon fas fa-search fa-2x"
            // TODO add search functionality
            onClick={() => {}}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Home;
