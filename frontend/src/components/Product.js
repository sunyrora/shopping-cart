import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
            <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt='PlayStation 5' />

            <div className="product__iinfo">
                <p className="info__name">Product 1</p>
                <p className="info__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eligendi aspernatur distinctio ab ipsam deserunt.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ducimus nesciunt similique consequuntur dolores enim.
                </p>
                <p className="info__price">$499.99</p>
                <Link to={`/product/61cc6c32a561c326e086567d`} className="info__button">View</Link>
            </div>
        </div>
    )
};

export default Product;
