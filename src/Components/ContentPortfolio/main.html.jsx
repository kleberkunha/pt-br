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

                    <div className='test-card-1' onClick={() => handleClick()}></div>
                    <div className='test-card-2' ></div>
                    <div className='test-card-3' ></div>
                    <div className='test-card-4' ></div>
                    <div className='test-card-5' ></div>
                    <div className='test-card-6' ></div>
                    <div className='test-card-7' ></div>
                    <div className='test-card-8' ></div>
                    <div className='test-card-9' ></div>
                    <div className='test-card-10' ></div>
                    <div className='test-card-11' ></div>
                    <div className='test-card-12' ></div>
                    <div className='test-card-13' ></div>
                    <div className='test-card-14' ></div>
                    <div className='test-card-15' ></div>
                    <div className='test-card-16' ></div>

                    <img src={bannerTech} alt="" />
                </div>
                <div className='devide-top-and-body'></div>

            </div>

    );
}

export default Main;
