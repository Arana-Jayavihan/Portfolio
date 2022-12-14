import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { NavigationDots } from '../../components/NavigationDots';
import SocialMedia from '../../components/SocialMedia';
import './index.scss'

const Layout = (props) => {
    return (
        <>
            <Navbar active={props.idName} />
            {props.children}
            <SocialMedia />
            <NavigationDots active={props.idName} />
            
            <div className="copyright">
                <p className="p-text" style={{ color: "white" }}>Arana Jayavihan 🍃</p>
                <p className="p-text" style={{ color: "white" }}>Copyright @ 2022 - 2023</p>
            </div>
        </>
    );
}

export default Layout;
