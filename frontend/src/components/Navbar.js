import './Navbar.css';
import { Link}  from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({setSideToggle}) => {
    const { cart } = useSelector(state => state);

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
                            <span className="cartlogo__badge">{cart.itemCount}</span>
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
