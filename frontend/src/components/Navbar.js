import './Navbar.css';
import { Link}  from 'react-router-dom';

const Navbar = ({setSideToggle}) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>SJ Shopping cart</h2>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo__badge"> 0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                       Shop
                    </Link>
                </li>
            </ul>
            <div className="hamberger__menu" onClick={setSideToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
