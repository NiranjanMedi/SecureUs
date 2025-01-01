import React from 'react';
import ContactForm from './ContactForm';
//import {AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai';


const About = () => {
    return (
        <section className='section'>
            <div className='container mx-auto relative'>
                <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-12 text-center lg:text-left pt-10'>
                    <div className='mt-24 items-center text-center mb-20'>
                        <h2 className='text-5xl py-4 text-primary font-medium'>Our Work</h2>
                        <p className='text-lg py-5 leading-8 text-primary'>SecureUs utilizes APIs and data analysis to determine safety ratings for each region in India as well as alert users of the most prevalent crimes in those regions. This safety rating helps users assess the safety level of a particular area, empowering them to plan their journeys with confidence. Whether you're a student walking home late at night or a traveler exploring a new city, our platform will keep you informed about the safety of your surroundings.</p>
                        <h2 className='text-5xl py-4 text-primary font-medium lg:mt-30 sm:mt-20'>Our Team</h2>
                        <h2 className='text-3xl py-4 text-primary font-medium'>Niranjan Mediratta</h2>
                        <h3 className='text-2xl py-2 text-primary'>Founder and Developer of SecureUs</h3>
                        <p className='text-lg py-5 leading-8 text-primary mb-24'>I am the founder and developer of SecureUs, a website aimed at alerting users, particularly women, when they are in high-risk, unsafe regions in India based on data from the National Crime Records Bureau of India and numerous surveys. This website provides users with official data presented in a succint and understandable format with the aim of averting future crimes. </p>
                        <h2 className='text-5xl py-4 text-primary font-medium'>Contact Us</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;
