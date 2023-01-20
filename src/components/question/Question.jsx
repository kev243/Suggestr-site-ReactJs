import React, { useState } from 'react';
import './question.css'

const Question = ({question}) => {
    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <div className='question-container'>
            <div className="question-content">
            <h4 className={ isOpen? 'text-title-color' : 'text-title'}> 
                {question.title}</h4>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen?'-' : '+'}</button>
        </div>

        {
            isOpen? <p>{question.info}</p> : ''
        }
          
        
        </div>

     );
};

export default Question;