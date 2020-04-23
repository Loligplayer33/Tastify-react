import React, { useState, useEffect } from 'react';

import getResults from '../Search/apiSearch';

function SearchResults(props) {
  const extractTerm = props.location.search.slice(6);
  const [results, setResults] = useState(extractTerm);

  useEffect(() => {
    async function getApiResults() {
      setResults(await getResults(extractTerm));
    }

    getApiResults();
  }, [extractTerm]);

  console.log(results);

  return (
    <div>
      <h1>{extractTerm}</h1>
    </div>
  );
}

export default SearchResults;
