import React from 'react';

import { images } from '../../constants';
import './Navbar.scss'

import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useState } from 'react';

const Navbar = () => {
    const navArr = ['home', 'about', 'skills', 'projects', 'contact']
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('home');
    const count = navArr.length
    
    window.addEventListener('scroll', () => {
        let height = window.document.body.scrollHeight - window.innerHeight
        let curPosition = window.pageYOffset;

        if (height / count >= curPosition) {
            setActive('home')
        }
        else if (height / count * 2 >= curPosition) {
            setActive('about')
        }
        else if (height / count * 3 >= curPosition) {
            setActive('skills')
        }
        else if (height / count * 4 >= curPosition) {
            setActive('projects')
        }
        else if (height / count * 5 >= curPosition) {
            setActive('contact')
        }
    })
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                {/* <img src={images.logo4} alt='logo' /> */}
                {/* <svg style={{height: '30px', width: '100px'}} >
                    
                </svg> */}
            </div>
            <ul className='app__navbar-links'>
                {
                    navArr.map((item, index) => (
                        <li className='app__flex p-text' key={index}>
                            <div></div>
                            <a href={`#${item}`} style={active === item ? { color: '#28a745' } : {}} >{item}</a>
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
                                    ['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
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

export { Navbar };
