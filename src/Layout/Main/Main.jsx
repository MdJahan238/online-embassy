import React from 'react';
import Header from './../../pages/Shared/Header/Header';
import Footer from './../../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='mt-32'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;