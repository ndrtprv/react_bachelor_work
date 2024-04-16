import React from 'react';
import './Header.css';
import brand from '../../resources/photos/brand.png';
import NavigationPanel from './nav_panel/NavigationPanel';

function Header(props) {
    return (
        <header className="sticky-top">
            <NavigationPanel data1={props.data1} data2={props.data2} brand={brand}/>
        </header>
    );
}

export default Header;