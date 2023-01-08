import React from 'react';
import './article.css'

const Article = ({ imgUrl, text }) => {
    return (
        <div className='articles_container'>
            <div className="article_content">
                <div className="article_image">
                    <img src={imgUrl} />
                </div>
                <div className="article_text">
                    <h3>{text}</h3>
                </div>
            </div>


        </div>
    );
};

export default Article;