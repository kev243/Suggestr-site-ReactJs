import React from 'react';
import './getting.css'
import Started from '../../components/started/Started';
import deem3 from '../../assets/deem3.jpg'

const Getting = () => {
    return (
        <div className='getting-container section__padding'>


            <div className="getting-content">
                <div className="getting-img">
                    <img src={deem3} alt="persone"/>
                </div>
                <div className="getting-text">
                    <div className="subtitle">
                        <p>La mise en route est aussi simple que 1-2-3</p>
                    </div>
                    <div className="getting-text-content">
                        <Started number={'1'} title={"Installez l'application depuis l'App Store de Shopify"} subtitle="L'installation et le traitement initial prennent moins de 3 minutes. Un responsable du bonheur client vous contactera pour vous tenir la main à chaque étape du processus." />
                        <div className="title-getting">
                        </div>
                        <Started number={'1'} title={"Installez l'application depuis l'App Store de Shopify"} subtitle="L'installation et le traitement initial prennent moins de 3 minutes. Un responsable du bonheur client vous contactera pour vous tenir la main à chaque étape du processus." />
                        <div className="title-getting">
                        </div>
                        <Started number={'1'} title={"Installez l'application depuis l'App Store de Shopify"} subtitle="L'installation et le traitement initial prennent moins de 3 minutes. Un responsable du bonheur client vous contactera pour vous tenir la main à chaque étape du processus." />

                    </div>


                </div>
            </div>





        </div>
    );
};

export default Getting;