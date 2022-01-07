import './Navbar.css';
import { Link}  from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({setSideToggle}) => {
    const { cart } = useSelector(state => state);

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2><Link to="/">SJ Shopping cart</Link></h2>
            </div>

            <ul className="navbar__links">
                <div className="navbar__links__full">
                    <li>
                        <Link to="/cart" className="cart__link">
                            <i className="fas fa-shopping-cart"></i>
                            <span>
                                Cart
                            </span>
                            <span className="cartlogo__badge">{cart.itemCount}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        Shop
                        </Link>
                    </li>
                </div>
                <div className="navbar__links__mini">
                    <li>
                        <Link to="/cart" className="cart__link">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="cartlogo__badge">{cart.itemCount}</span>
                        </Link>
                    </li>
                </div>

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
