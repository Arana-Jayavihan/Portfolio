import React from 'react';
import { Navbar } from '../../components';
import NavigationDots from '../../components/NavigationDots';
import SocialMedia from '../../components/SocialMedia';
import './index.scss'

const Layout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            <SocialMedia />
            <NavigationDots active={props.idName} />
            {/* <div>
                <div class="container">
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                </div>
            </div> */}
            <div className="copyright">
                <p className="p-text" style={{ color: "white" }}>@2022 Arana Jayavihan</p>
                <p className="p-text" style={{ color: "white" }}>All rights reserved</p>
            </div>
        </>
    );
}

export default Layout;
