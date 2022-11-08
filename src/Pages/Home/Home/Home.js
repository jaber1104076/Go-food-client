import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import GetUpdate from '../GetUpate/GetUpdate';
import Profile from '../Profile/Profile';
import Sevices from '../Services/Sevices';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Sevices></Sevices>
            <Profile></Profile>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default Home;