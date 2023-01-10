import React from 'react';
import './started.css'

const started = ({number, title, subtitle}) => {
    return (
        <div className='started-container'>
            <div className="started-top">
                <p>{number}</p>
                <h4>{title}</h4>
            </div>

            <div className="started-down">
                <p>{subtitle}</p>
            </div>
            
        </div>
    );
};

export default started;