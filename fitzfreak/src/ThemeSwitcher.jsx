import './ThemeSwitcher.css';

function ThemeSwitcher( {className, theme, toggleTheme }){
    const icon = theme === 'light' ? "🌞" : "🌙";
    return(
        <span className={`${className} theme-switcher`}>
            <button 
            type="button" className="theme-switcher__toggle"
                onClick={toggleTheme}>
                    <span className="theme-switcher__select"/>
                    {icon}
            </button>
        </span>
    );
}

export default ThemeSwitcher;