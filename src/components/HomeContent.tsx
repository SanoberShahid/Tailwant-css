"use client";

import React from 'react';
import AOS from 'aos';
import { useEffect} from 'react';
import 'aos/dist/aos.css';

const HomeContent = () => {
    useEffect(() =>{
         AOS.init({
            duration:1000,
            once:true,
        });
    },[]);
    return(
        <section className='hero h-screen flex items-right bg-cover bg-between'style={{backgroundImage:"url(backg.jpg)"}}>
    <div className='pl-0 m:pl-16 text-white text-center'>
        <h1 className='text-4xl font-bold drop-shadow-md' data-aos='fade-up'>WellCome-to HubLot</h1>
        <p className='text-2xl mt-4'>Your one-stop Shop for the best watches-women..</p>
        <button className='mt-5 px-5 py-5 bg-blue-500 hover:bg-blue-700 rounded-md font-bold'>Shop_Now</button>
    </div>
        </section>
    )
}
export default HomeContent