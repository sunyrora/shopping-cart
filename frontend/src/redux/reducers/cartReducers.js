import * as actionTypes from "../constants/cartConstnts";

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
// export const INITIAL_STATE = {
//   subTotal: 0,
//   itemCount: 0,
//   cartItems: [],
// };

// To make cart items stay when refresh page
const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export const getCartItemCount = (cartItems) =>
  cartItems?.reduce((acc, item) => acc + item?.qty, 0);
export const getCartSubTotal = (cartItems) =>
  cartItems?.reduce((price, item) => price + item?.price * item?.qty, 0);

export const INITIAL_STATE = {
  cart: {
    itemCount: cartFromLocalStorage.length
      ? getCartItemCount(cartFromLocalStorage)
      : 0,
    subTotal: cartFromLocalStorage.length
      ? getCartSubTotal(cartFromLocalStorage)
      : 0,
    cartItems: cartFromLocalStorage,
  },
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  let cartItems = state.cartItems;
  let itemCount = state.itemCount;
  let subTotal = state.subTotal;

  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const { item } = action.payload;
      const existItem = state.cartItems.find(
        (x) => x.productId === item.productId
      );

      if (existItem) {
        cartItems = state.cartItems.map((x) =>
          x.productId === existItem.productId
            ? { ...x, qty: Number(x.qty) + Number(item.qty) }
            : x
        );
      } else {
        cartItems = [...state.cartItems, item];
      }

      itemCount = getCartItemCount(cartItems);
      subTotal = getCartSubTotal(cartItems);

      return {
        ...state,
        cartItems: cartItems,
        itemCount: itemCount,
        subTotal: subTotal,
      };
    }

    case actionTypes.MODIFY_QUANTITY: {
      const { item } = action.payload;
      cartItems = state.cartItems.map((cart) =>
        cart.productId === item.productId ? { ...cart, qty: item.qty } : cart
      );
      itemCount = getCartItemCount(cartItems);
      subTotal = getCartSubTotal(cartItems);
      return {
        ...state,
        cartItems,
        itemCount,
        subTotal,
      };
    }
    case actionTypes.REMOVE_FROM_CART: {
      const id = action.payload;
      cartItems = state.cartItems.filter((x) => x.productId !== id);
      itemCount = getCartItemCount(cartItems);
      subTotal = getCartSubTotal(cartItems);

      return {
        ...state,
        cartItems: cartItems,
        itemCount: itemCount,
        subTotal: subTotal,
      };
    }

    case actionTypes.CART_RESET:
    default:
      return state;
  }
};
