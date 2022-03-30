import { ActionTypes } from "../constants/action-types";

export const addProductInCart = (product) => {
  return {
    type: ActionTypes.ADD_PRODUCT_IN_CART,
    payload: product,
  };
};

export const removeProductFromCart = (product) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: product,
  };
};

export const makeCartEmpty = () => {
  return {
    type: ActionTypes.MAKE_CART_EMPTY,
  };
};

export const setCart = (cartObj) => {
  return {
    type: ActionTypes.SET_CART,
    payload: cartObj,
  };
};
