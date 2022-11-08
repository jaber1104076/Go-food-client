import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Profile from '../Profile/Profile';
import Sevices from '../Services/Sevices';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Sevices></Sevices>
            <Profile></Profile>
        </div>
    );
};

export default Home;