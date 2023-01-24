import React from 'react';
import DetailPrice from '../components/detailPrice/DetailPrice';
import Navbar from '../components/navbar/Navbar';

const Pricing = () => {
    return (
        <div className='container-pricing'>
            <Navbar/>
            <DetailPrice/>
        </div>
    );
};

export default Pricing;