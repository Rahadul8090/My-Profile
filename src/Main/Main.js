import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';
import Nav from '../Component/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;