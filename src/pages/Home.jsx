import React from 'react';
import Navbar from '../components/navbar/Navbar'
import Header from '../containers/header/Header'
import Cta from '../containers/cta/Cta'
import Value from '../containers/value/Value';
import Research from '../containers/research/Research';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Cta/>
            <Value/>
            <Research/>
        </div>
    );
};

export default Home;