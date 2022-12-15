import Home from './Home';
import Products from './Products';
import ContactUs from './ContactUs';

function Main({ page }) {
    return ( 
    <main>
        { (page === '/') && <Home/> }
        { (page === '/Products.jsx') && <Products/> }
        { (page === '/ContactUs.jsx') && <ContactUs/> }
    </main>
    );
}

export default Main;