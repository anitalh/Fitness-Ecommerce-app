import './Header.css';
import logo from './images/logo.png';
import GlobalNav from './GlobalNav';
import ThemeSwitcher from './ThemeSwitcher';

function Header( {onNav, theme, toggleTheme} ) {
    return (
        <header className="header">
            <a href="\">
            <img
                src={logo} alt="logo" 
                className="header__logo"
            />
            </a>
            <h1 className="header__title">
                FitZ Freak
            </h1>
            <a className="skip-to-content-link" href="#main">
                Skip to content
            </a>
            <GlobalNav onNav={onNav} className="header__nav"/>
            <ThemeSwitcher className="header__theme-switcher" theme={theme} toggleTheme={toggleTheme}/> 
        </header>
    ); 
}

export default Header;