import React, { useState, useEffect } from 'react';
import Search from './apiSearch';

function ProcessSearch(props) {
  const [query, setQuery] = useState({});

  // && e.value !== undefined
  if (props.event.which == 13 || props.event.type === 'click') {
    updateQueryState();
  }

  async function updateQueryState() {
    let query = await new Search(props.event.value).getResults();
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
