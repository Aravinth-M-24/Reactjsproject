import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './navbar';
import MainMenu from './mainmenu';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Navbar />
          
            
            <section>
                <Outlet />
            </section>
            <Footer />
        </>
    );
}

export default Layout;
