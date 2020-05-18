import React, { useState, useEffect } from 'react';

import getResults from '../Search/apiSearch';
import Card from './SearchResultsCard';

import s from './searchResults.module.scss';

function SearchResults(props) {
  const [results, setResults] = useState({});
  const [baseUri, setBaseUri] = useState('');

  const searchQuery = props.location.search.slice(6);

  useEffect(() => {
    async function getApiResults() {
      const apiData = await getResults(searchQuery);
      setResults(apiData.data.results);
      setBaseUri(apiData.data.baseUri);
    }

    getApiResults();
  }, [searchQuery]);

  return (
    <div className={s.container}>
      <section className={s.recipeResults}>
        <h1 className={s.heading}>{`Recipes for: „${searchQuery}"`}</h1>
        <div className={s.bottomLine}></div>
        <div className={s.grid}>
          {Object.entries(results).map(function displayCards(recipe) {
            let modifiedTitle;
            if (recipe[1].title.length > 18) {
              modifiedTitle = recipe[1].title.slice(0, 18) + '...';
            } else {
              modifiedTitle = recipe[1].title;
            }
            return (
              <Card
                title={modifiedTitle}
                baseUri={baseUri}
                imgUrl={recipe[1].image}
                key={recipe[1].title.replace(' ', '').toLowerCase()}
                id={recipe[1].id}
                readyInMinutes={recipe[1].readyInMinutes}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default SearchResults;
