import { ActionTypes } from "../constants/action-types";

export const setOrder = (order) => {
  return {
    type: ActionTypes.SET_ORDER,
    payload: order,
  };
};

export const setOrders = (orders) => {
  return {
    type: ActionTypes.SET_ORDERS,
    payload: orders,
  };
};
