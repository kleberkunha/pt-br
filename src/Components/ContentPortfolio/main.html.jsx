import React from 'react';
import './main.scss';
import '../../global.scss';
import './cards.scss';
//import bannerTech from './img/portfolio/banner-techs-2.png';
import bannerTech from './img/portfolio/logos.png';
import { useEffect } from 'react';
import { handleClick } from './effects';




function Main() {


    useEffect(() => {
        const script = document.createElement('script');
        script.src = './effects.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);



    return (
            <div className='content-control-div'>
                <div className='devide-top-and-body'></div>

                <div className='banner-portfolio'>

                    <div className='test-card-1 cards-tech' onClick={() => handleClick()}></div>
                    <div className='test-card-2 cards-tech' ></div>
                    <div className='test-card-3 cards-tech' ></div>
                    <div className='test-card-4 cards-tech' ></div>
                    <div className='test-card-5 cards-tech' ></div>
                    <div className='test-card-6 cards-tech' ></div>
                    <div className='test-card-7 cards-tech' ></div>
                    <div className='test-card-8 cards-tech' ></div>
                    <div className='test-card-9 cards-tech' ></div>
                    <div className='test-card-10 cards-tech' ></div>
                    <div className='test-card-11 cards-tech' ></div>
                    <div className='test-card-12 cards-tech' ></div>
                    <div className='test-card-13 cards-tech' ></div>
                    <div className='test-card-14 cards-tech' ></div>
                    <div className='test-card-15 cards-tech' ></div>
                    <div className='test-card-16 cards-tech' ></div>

                    <img src={bannerTech} alt="" />
                </div>
                <div className='devide-top-and-body'></div>

            </div>

    );
}

export default Main;
