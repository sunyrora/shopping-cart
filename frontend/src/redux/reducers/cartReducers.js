import * as actionTypes from '../constants/cartConstnts';


/*
CartItem state
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
    cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.productId === item.productId);
            if(existItem) {
                return  {
                    ...state,
                    cartItems: state.cartItems.map(x => x.productId === existItem.productId ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
            
        case actionTypes.REMOVE_FROM_CART:
            const id = action.payload;
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.productId !== id),
            };
        case actionTypes.CART_RESET:
        default:
            return state;
    }
}