import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

const RootLayout = () => {
    return (
        <div>
           <NavBar></NavBar>
           {/* dynamic */}
           <Outlet></Outlet>
          <Footer></Footer>
      </div>
    );
};

export default RootLayout;