import * as actionTypes from "../constants/cartConstnts";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  console.log("add to cart qty: ", qty);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      item: {
        productId: data._id,
        name: data.name,
        description: data.description,
        price: data.price,
        countInStock: data.countInStock,
        imageUrl: data.imageUrl,
        qty: Number(qty),
      },
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const modyfyQuantity = (id, qty) => async (dispatch, getState) => {
  // const { data } = await axios.get('/api/products/${id}');
  const item = {
    productId: id,
    qty: Number(qty),
  };

  dispatch({
    type: actionTypes.MODIFY_QUANTITY,
    payload: { item },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
