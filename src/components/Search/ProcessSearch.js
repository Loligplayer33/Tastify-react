import React, { useState, useEffect } from 'react';
import Search from './apiSearch';

function ProcessSearch(e) {
  const [query, setQuery] = useState({});

  if (e.which == 13) {
    updateQueryState();
  }

  async function updateQueryState() {
    let query = await new Search(e.value).getResults();
    setQuery(query);
  }

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div>
      <h1>Search field</h1>
    </div>
  );
}

export default ProcessSearch;
