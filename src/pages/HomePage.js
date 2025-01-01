import React, { Component } from 'react';
import FlipCard from './flipCard';
import Typical from 'react-typical';
import InfoCards from './InfoCards';


const HomePage = () => {
    return (
        <div className='section w-full h-full'>
            <div className='container sm:mx-auto lg:mx-20 h-full relative mb-72'>
                <div className='flex flex-col justify-center mb-24'>
                    <div className='w-full pt-36 pb-12 lg:w-auto flex flex-col justify-center sm:items-center lg:items-start' id='main'>
                        <h1 className="lg:text-6xl sm:text-5xl font-bold w-13 mt-20 lg:p-5 sm:py-5 sm:mt-5">
                            Created to <br />
                            <Typical 
                                loop = {Infinity}
                                wrapper = "p"
                                steps = {[
                                " Protect",
                                2000,
                                " Prevent",
                                2000,
                                " Alert",
                                2000
                                ]}
                            />
                        </h1>
                        <p className="sm:py-5 lg:p-5 lg:text-4xl sm:text-3xl mb-4 lg:mb-12">Awareness and Action</p>
                        <a href='/crimeMap' className='sm:py-5 lg:p-5 btn mb-[30px] lg:mb-12 lg:ml-5 text-white sm:w-72'>Check safety level</a>
                    </div>
                    <div className='flex justify-end max-h-96 lg:max-h-max sm:mt-8 lg:px-10 pb-10 sm:pb-20' id='stats'>
                        <div className=' relative lg:-right-full flex-col sm:w-96 lg:w-4/5'>
                            <div className='flex flex-col items-center lg:mr-10'>
                                <h1 className='lg:text-6xl sm:text-5xl font-bold w-13 lg:px-5 text-center'>49</h1><br />
                                <p className='text-xl text-center pb-8'>Offences against women are committed per hour in India</p>
                            </div>
                            <div className='flex flex-col items-center mt-10 lg:mr-10'>
                                <h1 className='lg:text-6xl sm:text-5xl font-bold w-13 lg:px-5 text-center'>1 in every 20</h1><br />
                                <p className='text-xl text-center pb-8'>Women in the world have experienced sexual assault</p>
                            </div>
                            <div className='flex flex-col items-center mt-10 lg:mr-10'>
                                <h1 className='lg:text-6xl sm:text-5xl font-bold w-13 lg:px-5 text-center'>4,28,278</h1><br />
                                <p className='text-xl text-center pb-8'>Were the number of crimes committed against women in 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='text-xl text-center'>Scroll to explore cards</h3>
            <InfoCards /> 
        </div>
    )
}

export default HomePage