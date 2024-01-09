import React from 'react';
import '../../global.scss';
import './maintop.scss';
import SpaceSvg from '../../Components/ContentPortfolio/img/svg/svg-study.svg';

function MainTop () {
    return (
        <header className="masthead  text-white text-center" id="top-section">
            <div className='container'>
                <div className='col-12'>
                    <div className="box">
                        <div className="header-main ">
                            <p>À la recherche d'une alternance</p>
                            <div className='alternance-content'>
                                <div className='title'>
                                    <h3>Concepteur développeur d’applications</h3>
                                </div>
                                <div className='type-contract'>
                                    <h5>Typesdecontrat&nbsp;:&nbsp; Apprentissage (18mois).</h5>
                                </div>
                                <div className='preparation'>
                                    <h5>Préparation&nbsp;:&nbsp;NiveauBac+4.</h5>
                                </div>
                                <div className='rythme'>
                                    <h5>Rythme&nbsp;:&nbsp;1 mois en entreprise / 2 semaines enformation</h5>
                                </div>
                                <div className='techs'>
                                    <h5>Technologies&nbsp;:&nbsp;Java,&nbsp;JavaSE,&nbsp;JEE,&nbsp;JS,&nbsp;PHP,&nbsp;Symfony,&nbsp;CMS,&nbsp;SQL.</h5>
                                </div>
                            </div>
                            <a href='https://www.eni-ecole.fr/formations/developpement/niveau-6-bac4-concepteur-developpeur-dapplications/' target='_blank' rel="noreferrer">
                                <img src="https://uploads-ssl.webflow.com/626955b6124ddf1032c2e6db/62b2e0ca58c4d23b78d11b72_ENI_LOGO.png" alt="logo school ENI" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img className='svg-space' src={SpaceSvg} alt="" />
        </header>
    )
}

export default MainTop;


