import "./CartScreen.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// Components
import CartItem from '../components/CartItem';

// Actions
import { addToCart, removeFromCart } from '../redux/actions/cartActions';


const CartScreen = () => {
    const { cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const removeFromCartHandler = id => {
        dispatch(removeFromCart(id));
    }

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    }

    const getCartItemCount = () => (
        cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    );

    const getCartSubTotal = () => (
        cartItems.reduce((price, item) => (price + (item.price*item.qty)), 0)
    )

    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
            <h2>Shopping Cart</h2>
            { cartItems.length === 0 ? (
                <div>
                    Your cart is empty. <Link to="/">Go back</Link>
                </div>
                ) : (
                cartItems.map(item => (
                    <CartItem key={item.productId} item={item}
                        onClickDelete={removeFromCartHandler}
                        onChangeQty={qtyChangeHandler}
                     />
                ))
            )}
            </div>
            <div className="cartscreen__right">
            <div className="cartscreen__info">
                <p>Subtotal { getCartItemCount() } items</p>
                <p>${ getCartSubTotal() }</p>
            </div>
            <div><button>Proceed to Checkout</button></div>
        </div>
            
        </div>
    )
};

export default CartScreen;

