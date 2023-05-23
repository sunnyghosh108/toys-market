import React from 'react';
import Banner from './Shared/Footer/Banner/Banner';
import Gallery from './Shared/Footer/Gallery/Gallery';
import LatestBlog from './LatestBlog/LatestBlog';
import Help from './Shared/Help/Help';
import Brands from './Shared/Footer/Brands/Brands';
import Category from './AllToys/Category/Category';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <Help></Help>
          <Gallery></Gallery>
         <LatestBlog></LatestBlog>
         <Brands></Brands>
        </div>
    );
};

export default Home;