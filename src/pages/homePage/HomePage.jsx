import React from 'react';

import TrendingApps from '../../component/homepage/TrendingApps';
import Stats from '../../component/homepage/Stats';
// import Banner from '../../component/homepage/banner';
import Banner from "../../component/homepage/Banner";
import { useLoaderData } from 'react-router';



const HomePage = () => {
 const data = useLoaderData();
 console.log(data,"home page");
    return (
        <>
             <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </>
    );
};

export default HomePage;