import React from 'react';
import './cta.css';
import { useNavigate } from 'react-router-dom';


const Cta = () => {
    const navigate = useNavigate();
   
   

    // function de redirection home au clique du logo
    function handleClick() {
        navigate("/bookdemo");
    }
    return (
        <div className='cta-container section__padding'>
            <div className="cta-content">
                <div className="cta-content-left">
                    <div className="cta-content-left-text">
                        <p>Pourquoi devrais-je m'en soucier?</p>
                        <h2>Les entreprises gagnent en moyenne 11 % de plus dans les 20 jours suivant leur installation.</h2>
                    </div>
                    <div className="cta-content-left-btn">
                        <button  onClick={handleClick}>Réserver une démo</button>
                    </div>

                </div>

                <div className="cta-content-right">
                    <div className="cta-content-right-top">
                        <h1>33x</h1>
                        <h3>Quel est le retour sur investissement?</h3>
                        <p>Attribution claire ses revenus. Esseai gratuir de 30 jours.</p>
                    </div>
                    <div className="cta-content-right-bottom">
                        <h1>13ms</h1>
                        <h3>Cela ralentira-t-il mon magasin ?</h3>
                        <p>Le temps c'est de l'argent et Suggestr est conçu pour des performances extrêmes. Se charge plus rapidement qu'une recherche Google.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Cta;