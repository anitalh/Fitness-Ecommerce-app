import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('/');
  const [theme, setTheme] = useState('light');

  function onNav(event) {
    event.preventDefault();
    const target= event.target.getAttribute('href');
    setPage(target);
  }

  function toggleTheme(){
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className={`app ${theme}`}>
      <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme} />
      <Main page={page}/>
      <Footer />
    </div>
  );
}

export default App;