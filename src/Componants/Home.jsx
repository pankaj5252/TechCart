import React from 'react';
import Slider from './Common/Slider';
import TopCategories from './Categories/TopCategories';
import LatestProducts from './Categories/LatestProducts';
import Discounts from './Categories/Discounts';
import Blogs from './Blogs';
import GetOfferse from './Common/GetOfferse';

const Home = () => {
  return (
    <>
      <Slider />
      <TopCategories />
      <hr />
      <LatestProducts />
      <Discounts />
      <Blogs />
      <GetOfferse />
    </>
  );
};

export default Home;
