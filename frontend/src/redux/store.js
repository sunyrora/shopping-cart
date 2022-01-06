import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';

const reducers = combineReducers({
    cart: cartReducer,
    listProducts: getProductsReducer,
    productDetails: getProductDetailsReducer,
});

const middleware = [thunk];

// To make cart items stay when refresh page
const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const INITIAL_STATE = {
    cart: {
        itemCount: 0,
        subTotal: 0,
        cartItems: cartFromLocalStorage
    }
};


const store = createStore(
    reducers,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;