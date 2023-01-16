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
            isOpen? <p>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Dolorem tenetur omnis repellendus odio offi
            cia debitis ducimus dicta placeat aspernatur. Omnis
             architecto illum vero ratione dolor minus necessitatibus
              harum earum cum!</p> : ''
        }
          
        
        </div>

     );
};

export default Question;