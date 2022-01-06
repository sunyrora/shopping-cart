import * as actionTypes from '../constants/cartConstnts';


/*
cartItems state
Array of { 
    productId,,
    name,
    description,
    price,
    countInStock,
    imageUrl,
    qty
}
 */
const CART_INITIAL_STATE = {
    subTotal: 0,
    itemCount: 0,
    cartItems: [],
};

const getCartItemCount = (cartItems) => (
    cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
);

const getCartSubTotal = (cartItems) => (
    cartItems.reduce((price, item) => (price + (item.price*item.qty)), 0)
);


export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    let cartItems = state.cartItems;
    let itemCount = state.itemCount;
    let subTotal  = state.subTotal;

    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.productId === item.productId);

            if(existItem) {
                cartItems = state.cartItems.map(x => x.productId === existItem.productId ? item : x);
                itemCount = getCartItemCount(cartItems);
                subTotal = getCartSubTotal(cartItems);
            } else {
                cartItems = [...state.cartItems, item];
                itemCount = getCartItemCount(cartItems);
            }

            return  {
                ...state,
                cartItems: cartItems,
                itemCount: itemCount,
                subTotal: subTotal
            };
            
        case actionTypes.REMOVE_FROM_CART:
            const id = action.payload;
            cartItems = state.cartItems.filter(x => x.productId !== id);
            itemCount = getCartItemCount(cartItems);
            subTotal = getCartSubTotal(cartItems);

            return {
                ...state,
                cartItems: cartItems,
                itemCount: itemCount,
                subTotal: subTotal
            };
            
        case actionTypes.CART_RESET:
        default:
            return state;
    }
}