import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';


const Header = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/bookdemo");
    }

    return (
        <div className="header ">
            <div className="header-content ">

                <div className="header-content-text">

                    <div className="container">
                        <div className="header-content-img "></div>
                    </div>

                    <div className="header-title">
                        <h1>Gagnez plus d'argent avec de meilleures recommandations de produits </h1>
                    </div>

                    <div className='header-subtitle'>
                        <h3>
                            Augmentez vos revenus de plus de 11 % sans travail supplémentaire. Découvrez ce que Suggestr peut faire pour votre boutique.
                        </h3>
                    </div>

                    <div className="header-btn">
                        <button onClick={handleClick}>Réserver une démo</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Header;