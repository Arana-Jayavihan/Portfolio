import React from 'react';
import { Navbar } from '../../components';
import NavigationDots from '../../components/NavigationDots';
import SocialMedia from '../../components/SocialMedia';

const Layout = (props) => {
    console.log(props.idName)
    return (
        <>
            <Navbar />
            {props.children}
            <SocialMedia />
            <NavigationDots active={props.idName} />
            <div className="copyright">
                <p className="p-text" style={{color: "white"}}>@2022 Arana Jayavihan</p>
                <p className="p-text" style={{color: "white"}}>All rights reserved</p>
            </div>
        </>
    );
}

export default Layout;
