import './InfoCards.css';
import React, {useState, useRef, useEffect} from 'react';
import {motion} from 'framer-motion';

const InfoCards = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div>
            <motion.div ref={carousel} className='carousel mb-20 w-full' whileTap={{cursor: 'grabbing'}}>
                <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                    <motion.div className='item sm:w-2/5 lg:w-1/3 relative lg:h-52 sm:h-40 shadow-inner rounded-md m-8'>
                        <div className='box'>
                            <div className='content'>
                                <h2>1</h2>
                                <h3 className='text-3xl mt-4 mb-10'>Stay Aware, Trust Your Instincts:</h3>
                                <p className='text-xl'>
                                Always be aware of your surroundings, and trust your instincts. If something feels off or unsafe, seek help or move to a public area.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='item sm:w-2/5 lg:w-1/3'> 
                        <div className='box'>
                            <div className='content'>
                                <h2>2</h2>
                                <h3 className='text-3xl mt-4 mb-10'>Use Well-Lit & Crowded Paths:</h3>
                                <p className='text-xl'>
                                    Opt for well-lit and crowded paths when walking alone, and avoid poorly lit or isolated areas, especially at night.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='item sm:w-2/5 lg:w-1/3'>
                        <div className='box'>
                            <div className='content'>
                                <h2>3</h2>
                                <h3 className='text-3xl mt-4 mb-10'>Share Your Location:</h3>
                                <p className='text-xl'>
                                    Share your location with a trusted friend or family member when traveling alone, so someone knows where you are.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='item sm:w-2/5 lg:w-1/3'>
                        <div className='box'>
                            <div className='content'>
                                <h2>4</h2>
                                <h3 className='text-3xl mt-4 mb-10'>Avoid Displaying Valuables:</h3>
                                <p className='text-xl'>
                                    Keep valuable items out of sight and avoid displaying expensive jewelry or gadgets, which may attract unwanted attention.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='item sm:w-2/5 lg:w-1/3'>
                        <div className='box'>
                            <div className='content'>
                                <h2>5</h2>
                                <h3 className='text-3xl mt-4 mb-10'>Group System:</h3>
                                <p className='text-xl'>
                                    When possible, travel with a friend or in a group, as there is safety in numbers.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='item sm:w-2/5 lg:w-1/3'>
                        <div className='box'>
                            <div className='content'>
                                <h2>6</h2>
                                <h3 className='text-3xl mt-4 mb-10'>Emergency Contacts:</h3>
                                <p className='text-xl'>
                                    Save emergency contact numbers on your phone and keep them easily accessible in case of any distress.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='item sm:w-2/5 lg:w-1/3'>
                        <div className='box'>
                            <div className='content'>
                                <h2>7</h2>
                                <h3 className='text-3xl mt-4 mb-10'>Learn Self-Defense</h3>
                                <p className='text-xl'>
                                    Consider learning basic self-defense techniques to feel more empowered and confident in challenging situations.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='item sm:w-2/5 lg:w-1/3'>
                        <div className='box'>
                            <div className='content'>
                                <h2>8</h2>
                                <h3 className='text-3xl mt-4 mb-10'>Use Safe Public Transportation</h3>
                                <p className='text-xl'>
                                    Opt for well-regulated public transportation options and avoid hitchhiking or accepting rides from strangers.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='item sm:w-2/5 lg:w-1/3'>
                        <div className='box'>
                            <div className='content'>
                                <h2>9</h2>
                                <h3 className='text-3xl mt-4 mb-10'>Trust Authorities & Seek Help</h3>
                                <p className='text-xl'>
                                    In case of any incident, trust law enforcement and report it immediately. Don't hesitate to seek help from nearby shops or businesses.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='item sm:w-2/5 lg:w-1/3'>
                        <div className='box'>
                            <div className='content'>
                                <h2>10</h2>
                                <h3 className='text-3xl mt-4 mb-10'>Stay Connected:</h3>
                                <p className='text-xl'>
                                    Stay connected with friends or family members through phone calls or text messages, especially during late hours.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default InfoCards;