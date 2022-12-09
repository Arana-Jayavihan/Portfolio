import React from 'react';

import { images } from '../../constants';
import './Navbar.scss'

import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useState } from 'react';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__navbar'>
            {/* <div className='app__navbar-logo'>
                <img src={images.logo4} alt='logo' />
            </div> */}
            <ul className='app__navbar-links'>
                {
                    ['home', 'about', 'skills', 'work', 'feedback', 'contact'].map((item, index) => (
                        <li className='app__flex p-text' key={index}>
                            <div></div>
                            <a href={`#${item}`}>{item}</a>  
                        </li>
                    ))
                }
            </ul>
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {
                    toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul>
                                {
                                    ['home', 'about', 'skills', 'work', 'feedback', 'contact'].map((item, index) => (
                                        <li key={index}>
                                            <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                                        </li>
                                    ))
                                }
                            </ul>

                        </motion.div>
                    )
                }
            </div>
        </nav>
    );
}

export default Navbar;
