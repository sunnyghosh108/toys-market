import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import NavBar from '../Components/Shared/Footer/NavBar/NavBar';
import Brands from '../Components/Shared/Footer/Brands/Brands';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Brands></Brands>
            <Footer></Footer>
        </div>
    );
};

export default Main;