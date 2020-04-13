// scss imports
import './scss/main.scss';
import './scss/reset.scss';

// external Imports
import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';

// module imports
import Navbar from './components/Navbar';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Inspiration from './components/Inspiration';
import Newsletter from './components/Newsletter';
import Connect from './components/Connect';
import Footer from './components/Footer';

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
      </Router>
      <Footer />
    </div>
  );
}

render(<App />, document.getElementById('root'));
