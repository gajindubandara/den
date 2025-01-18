import React from 'react';
import {motion} from 'framer-motion';
import Logo from '../assets/logo.png'

export const HeroContent: React.FC = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="hero-content text-center"
                >
                    {/* Logo */}
                    <motion.div
                        className="hero-logo mb-4"
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8}}
                    >
                        <img
                            src={Logo} // Replace with your logo URL
                            alt="Wildlife Logo"
                            className="img-fluid"
                            style={{maxWidth: '50%'}} // Adjust size as needed
                        />
                    </motion.div>

                    {/* Hero Text */}
                    <h1 className="display-4 fw-bold mb-4">
                        Experience Wildlife Like Never Before
                    </h1>
                    <p className="lead mb-4">
                        Immerse yourself in nature with our unique wildlife hotel experience.
                        Wake up to the sounds of nature and witness amazing wildlife right from your window.
                    </p>
                    <motion.div
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        <button className="book-btn"><i className="animation"></i>Book Your Stay<i className="animation"></i>
                        </button>
                        {/*<a href="#book" className="book-btn">*/}
                        {/*    Book Your Stay*/}
                        {/*</a>*/}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
