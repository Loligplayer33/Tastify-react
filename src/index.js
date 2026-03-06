// scss imports
import './scss/reset.scss';

// external Imports
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// module imports
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import Inspiration from './components/Inspiration/Inspiration';
import Newsletter from './components/Newsletter/Newsletter';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';
import SearchResults from './components/SearchResults/SearchResults';
import Recipe from './components/Recipe/Recipe';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="inspiration" element={<Inspiration />} />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="connect" element={<Connect />} />
        <Route path="searchResults" element={<SearchResults />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
      <Footer />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App /></BrowserRouter>);
