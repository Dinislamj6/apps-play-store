import React from 'react';

import TrendingApps from '../../component/homepage/TrendingApps';
import Stats from '../../component/homepage/Stats';
import Banner from '../../component/homepage/banner';


const HomePage = () => {
    return (
        <>
             <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </>
    );
};

export default HomePage;