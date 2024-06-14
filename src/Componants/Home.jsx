import React from 'react';
import Slider from './Common/Slider';
import TopCategories from './Categories/TopCategories';
import LatestProducts from './Categories/LatestProducts';

const Home = () => {
  return (
    <>
      <Slider />
      <TopCategories/>
      <hr />
      <LatestProducts/>
    </>
  );
};

export default Home;
