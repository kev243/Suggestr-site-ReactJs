import React, { useState } from 'react';
import './question.css'

const Question = ({question}) => {
    // const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='question-container'>
            <div className="question-content">
            <h4>{question.title}</h4>
            <button>+</button>
        </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dolorem tenetur omnis repellendus odio offi
                cia debitis ducimus dicta placeat aspernatur. Omnis
                 architecto illum vero ratione dolor minus necessitatibus
                  harum earum cum!</p>
        
        </div>

     );
};

export default Question;