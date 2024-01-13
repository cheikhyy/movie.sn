// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <div className='home'>  
     <Link to="/movie/1" id='mov-1'><img src={'./casadepapel.jpg'}/></Link>
      <Link to="/movie/2" ><img src={'./got.jpg'}/></Link>
      <Link to="/movie/3" ><img src={'./wars.jpg'}/></Link>
      <Link to="/movie/4" ><img src={'./gotham.jpg'}/></Link>
  </div>
  )  
};

export default Home;
