// scss imports
import './scss/reset.scss';

// external Imports
import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';

// module imports
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import Inspiration from './components/Inspiration/Inspiration';
import Newsletter from './components/Newsletter/Newsletter';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';
import ProcessSearch from './components/Search/ProcessSearch';
import RecipeOTD from './components/RecipeOfTheDay/RecipeOTD';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Home path="/" />
        <Recipes path="recipes" />
        <Inspiration path="inspiration" />
        <Newsletter path="newsletter" />
        <Connect path="connect" />
        <ProcessSearch path="search" />
        <RecipeOTD path="recipeOfTheDay" />
        <SearchResults path="searchResults" />
      </Router>
      <Footer />
    </div>
  );
}

render(<App />, document.getElementById('root'));
