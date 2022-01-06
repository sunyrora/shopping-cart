import './ProductScreen.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

// Actions
import { getProductsDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = () => {
    const [qty, setQty] = useState(1);

    const params = useParams();
    const navigate = useNavigate();
    const productId = params.id;

    const dispatch = useDispatch();
    const { productDetails } = useSelector(state => state);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if(product && productId !== product._id) {
            dispatch(getProductsDetails(productId));
        }
    }, [dispatch], product, productId);


    const addToCartHandler = e => {
        dispatch(addToCart(product._id, qty));
    // Todo
    // history.push("/cart");
    }

    return (
        <div className="productscreen">
            {loading ? (<h2>Loading...</h2>) : error ? <h2>{error}</h2> :
            (<>
                <div className="productscreen__left">
                <div className="left__image">
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="left__info">
                    <p className="left__name">{product.name}</p>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
                </div>
                <div className="productscreen__right">
                    <div className="right__info">
                        <p>Price: <span>${product.price}</span></p>
                        <p>Status: 
                            <span>
                                {product.countInStock ? (
                                    `In Stock (${product.countInStock})`
                                ) : `Out of Stock` }
                            </span>
                        </p>
                        <p>
                            Qty
                            <select value={qty} onChange={e => {setQty(e.target.value);}}>
                                {[...Array(product.countInStock).keys()].map(x => (<option key={x+1} value={x+1}>{x+1}</option>)
                                )}
                            </select>
                        </p>
                        <p><button type="button" onClick={addToCartHandler}>Add to cart</button></p>
                    </div>
                </div>
            </>)
            }
        </div>
    );
};

export default ProductScreen;
