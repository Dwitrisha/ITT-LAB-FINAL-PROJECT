import React from 'react';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Clubs from './Components/Clubs';
import Feedback from './Components/Feedback';

function Home() {
  return <div>
       <Header />
      <Carousel />
      <Clubs />
      <Feedback/>
  </div>;
}

export default Home;
