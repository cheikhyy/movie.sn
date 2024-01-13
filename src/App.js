// App.js

import React from 'react';
import {  Routes, Route, Link,} from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

const App = () => {
  return (
    <div>
    <nav>
    <ul>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="movie">Movie</Link>
      </li>
    </ul>
  </nav>

  <hr />

    <Routes>
    <Route path="/" element={<Home />} />
       
         <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
    </div>
  );
};

export default App;

