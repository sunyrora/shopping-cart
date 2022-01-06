import './CartItem.css';
import { Link } from 'react-router-dom';

/*
@param item { 
    productId,,
    name,
    description,
    price,
    countInStock,
    imageUrl,
    qty
}
 */

const CartItem = ({item, onClickDelete, onChangeQty }) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <Link to={`/product/${item.productId}`} className="cartitem__name">
                <p>{item.name}</p>
            </Link>

            <p className="cartitem__price">${item.price * item.qty} ({item.price}/unit)</p>
            <select className="cartitem__select" value={item.qty} onChange={e=>onChangeQty(item.productId, e.target.value)}>
                { [...Array(item.countInStock).keys()].map(x => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>

            <button className="cartitem__deletebtn" onClick={e => onClickDelete(item.productId)}><i className="fas fa-trash"></i></button>
        </div>
    )
};

export default CartItem;
