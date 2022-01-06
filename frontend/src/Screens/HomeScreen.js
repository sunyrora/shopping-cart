import './HomeScreen.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';

// Components
import Product from '../components/Product';

const HomeScreen = () => {

    const dispatch = useDispatch();
    const getProductsReducer = useSelector(state => state.getProductsReducer);

    const { products, loading, error } = getProductsReducer;

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>

            <div className="homescreen__products">
                { loading ? (
                    <h2>Loading...</h2>
                    ) : error ? (
                    <h2>{error}</h2>
                    ) : (
                        products.map(product => (
                        <Product product={product} />
                    )))
                }
            </div>
        </div>
    )
};

export default HomeScreen;
