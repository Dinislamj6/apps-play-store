import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
           <NavBar></NavBar>
           {/* dynamic */}
           <Outlet></Outlet>
          <Footer></Footer>

          {/* toast container */}
          <ToastContainer />
      </div>
    );
};

export default RootLayout;