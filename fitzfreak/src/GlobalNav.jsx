import './Header';
import menu from './menu';
import './App';
import './GlobalNav.css';
import {  useEffect, useState } from 'react';
import './Hamburger.css';

function GlobalNav({ className, onNav }) {
    const [showMenu, setShowMenu] = useState(false);

    const list = menu.map( item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a className="global-nav__link" href={item.path}
                onClick={onNav}>
                    {item.name}
                </a> 
            </li>
        );
    });

const showClass = showMenu ? 'global-nav__list--open' : '';

    return (
        <nav className={`global-nav ${className}`}>
        <button  
        className = "global-nav_button" 
        onClick={ () => setShowMenu(!showMenu) }
        aria-label={showMenu ? "Close Menu" : "Open Menu"}>
            <i className="gg-menu"/> 
        </button>
        <ul className={`global-nav__list ${showClass} `}>
            { list }
        </ul> 
        </nav>
    ); 
}

export default GlobalNav;