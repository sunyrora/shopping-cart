import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, name, description, price, imageUrl } = product;

    return (
        <div className="product">
            <img src={imageUrl} alt={name} />

            <div className="product__iinfo">
                <p className="info__name">{name}</p>
                <p className="info__description">
                    {description}
                </p>
                <p className="info__price">${price}</p>
                <Link to={`/product/${_id}`} className="info__button">View</Link>
            </div>
        </div>
    )
};

export default Product;
