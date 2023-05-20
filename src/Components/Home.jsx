import React from 'react';
import Banner from './Shared/Footer/Banner/Banner';
import Gallery from './Shared/Footer/Gallery/Gallery';
import LatestBlog from './LatestBlog/LatestBlog';
import Help from './Shared/Help/Help';
import AllToys from './AllToys/AllToys';
//import Help from './Shared/Help/Help';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllToys></AllToys>
          <Help></Help>
          <Gallery></Gallery>
         <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;