import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { NavigationDots } from '../../components/NavigationDots';
import SocialMedia from '../../components/SocialMedia';
import './index.scss'
import { motion } from 'framer-motion';

const Layout = (props) => {
    return (
        <>
            <Navbar active={props.idName} user={props.user} />
            {props.children}
            <SocialMedia />
            <NavigationDots active={props.idName} />
            
            <motion.div 
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            initial={{ opacity: 0 }}
            className="copyright">
                <p className="p-text" style={{ color: "white" }}>Arana Jayavihan 🍃</p>
                <p className="p-text" style={{ color: "white" }}>{props?.user?.copyright}</p>
            </motion.div>
        </>
    );
}

export default Layout;
