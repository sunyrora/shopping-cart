import './SideDrawer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideDrawer = ({show, setSideToggle}) => {
    const { cart } = useSelector(state => state);
    const sideDrawerClass = ["sidedrawer"];
    if(show) {
        sideDrawerClass.push("show");
    }
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={setSideToggle}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidedrawer__cartbadge">{cart.itemCount}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideDrawer;
