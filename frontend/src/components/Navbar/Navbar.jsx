import React from 'react';
import './Navbar.scss'

import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useState } from 'react';
import { urlFor } from '../../client'
import { useEffect } from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Navbar = (props) => {
    const navArr = ['home', 'about', 'skills', 'projects', 'contact']
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('home');
    const count = navArr.length

    const [profile, setProfile] = useState([]);
    useEffect(() => {
        setProfile(props.user)
    }, [props.user]);

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }

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
        <motion.nav className='app__navbar'
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            initial={{ opacity: 0 }}
        >
            <div className='app__navbar-logo'>
                {/* <img src={images.logo4} alt='logo' /> */}
                {/* <svg style={{height: '30px', width: '100px'}} >
                    
                </svg> */}
                <h1 className='head-text' style={{ fontSize: '1.5rem' }} ><a href="#home" style={{ textDecoration: 'none', color: '#fff' }} >Arana Jayavihan</a></h1>
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

                <motion.div
                    animate={toggle ? "open" : "closed"}
                    transition={{ duration: .5, ease: 'easeInOut' }}
                    initial={{ x: 300, opacity: 0 }}
                    variants={variants}
                    className='menu-div'
                >
                    <HiX className='cross' onClick={() => setToggle(false)} />
                    <motion.div
                        animate={toggle ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: .5 }}
                        initial={{ y: 30, opacity: 0 }}
                        className='panel-image-nav'>
                        {
                            profile.profileImg ?
                                <img src={urlFor(profile.profileImg)} alt="profile_bg" /> : null
                        }

                    </motion.div>
                    <motion.div
                        animate={toggle ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: .5 }}
                        initial={{ y: 30, opacity: 0 }}
                        style={{ margin: '1rem', marginBottom: '2rem', alignSelf: 'center' }} >
                        <h5 className='head-text' style={{ fontSize: '1.5rem', fontWeight: '400', fontFamily: 'inherit' }} >Arana Jayavihan</h5>
                    </motion.div>
                    <ul>
                        {
                            ['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
                                <motion.li
                                    animate={toggle ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut', delay: .5 }}
                                    initial={{ y: 30, opacity: 0 }}
                                    key={index}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                                </motion.li>
                            ))
                        }
                    </ul>
                    <motion.div
                        animate={toggle ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: .5 }}
                        initial={{ y: 30, opacity: 0 }}
                        style={{ display: 'flex', height: '10vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '3rem', marginTop: '2rem', alignSelf: 'center' }}>

                        <p className='p-text'>Follow Me</p>
                        <div className='footer__social-nav'>
                            <div>
                                <BsLinkedin style={{ color: 'GrayText', fontSize: '12px' }} onClick={() => window.open(profile.linkedin, "_blank")} />
                            </div>
                            <div>
                                <BsGithub style={{ color: 'GrayText', fontSize: '12px' }} onClick={() => window.open(profile.github, "_blank")} />
                            </div>
                            <div>
                                <BsInstagram style={{ color: 'GrayText', fontSize: '12px' }} onClick={() => window.open(profile.instagram, "_blank")} />
                            </div>
                            <div>
                                <BsTwitter style={{ color: 'GrayText', fontSize: '12px' }} onClick={() => window.open(profile.twitter, "_blank")} />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        animate={toggle ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: .5 }}
                        initial={{ y: 30, opacity: 0 }}
                        className='copyright__sm-nav'
                    >
                        <p className='p-text' style={{ textAlign: 'center' }}>
                            Arana Jayavihan 🍃
                        </p>
                        <p className='p-text' style={{ textAlign: 'center' }}>
                            Copyright @ 2022-2023
                        </p>
                    </motion.div>

                </motion.div>

            </div>
        </motion.nav>
    );

}

export { Navbar };
