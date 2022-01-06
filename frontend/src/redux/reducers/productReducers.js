import * as actionTypes from '../constants/productConstants';

const PRODUCTS_INITIAL_STATE = {
    products: []
}

export const getProductsReducer = (state = PRODUCTS_INITIAL_STATE, action ) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            };
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

const PRODUCT_DETAIL_INITIAL_STATE = {
    product: {}
};
export const getProductDetailsReducer = (state=PRODUCT_DETAIL_INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                product: {},
            };
        default:
            return state;
    }
};