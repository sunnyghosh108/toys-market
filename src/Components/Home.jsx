import React from 'react';
import Banner from './Shared/Footer/Banner/Banner';
import Gallery from './Shared/Footer/Gallery/Gallery';
import Help from './Shared/Help/Help';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Gallery></Gallery>
          <Help></Help>
        </div>
    );
};

export default Home;