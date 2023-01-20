import React from 'react';
import Included from '../../components/included/Included';
import './tariffication.css'
import check from '../../assets/check.png'


const Tariffication = () => {
    return (
        <div className='tarif-container section__padding'>
            <div className="bacground-container section__margin">
                <div className="container-left ">
                    <div className="left-top">
                        <h3>Obtenez 19 % de conversions en plus sur votre boutique dès aujourd'hui.</h3>
                        <p>Accès complet à une IA de qualité recherche qui devient continuellement plus intelligente. Faites plaisir à vos clients. Essai gratuit de 30 jours.</p>
                    </div>
                    <div className="left-down">
                        <div className="left-down-top">
                            <div className="text">
                            <h4>Ce qui est inclu</h4>
                            </div>
                            
                            <div className="div"></div>
                        </div>
                        <div className="left-down-bottom">
                            <div className="content">
                               <Included imgUrl={check} text='Product page recommendations'/>
                               <Included imgUrl={check} text='Product page recommendations'/>
                               <Included imgUrl={check} text='Product page recommendations'/>
                               <Included imgUrl={check} text='Product page recommendations'/>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-right">
                    <div className="content-right">
                        <h3>I don't need to talk to anyone, I'm ready to try</h3>
                        <button>Start Free Trial</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Tariffication;