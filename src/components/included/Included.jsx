import React from 'react';
import './included.css'

const Included = ({imgUrl, text }) => {
    return (
        <div className='included-conatainer'>
            <div className="includ-content">
                <div className="included-img">
                    <img src={imgUrl}/>
                    <p>{text}</p>
                </div>
                <div className="div-includ"></div>
            </div>
            
        </div>
    );
};

export default Included;