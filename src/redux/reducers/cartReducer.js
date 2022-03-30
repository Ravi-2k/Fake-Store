import { ActionTypes } from "../constants/action-types";

const initialState = {
  data: [],
  dataLength: 0,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT_IN_CART:
      const productExists = state.data.find((item) => item.id === payload.id);
      if (productExists) {
        return {
          data: state.data.map((item) =>
            item.id === payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          dataLength: state.dataLength + 1,
        };
      } else {
        return {
          data: [...state.data, { ...payload, quantity: 1 }],
          dataLength: state.dataLength + 1,
        };
      }

    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      const productExists1 = state.data.find((item) => item.id === payload.id);
      if (productExists1.quantity > 1) {
        return {
          data: state.data.map((item) =>
            item.id === payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          dataLength: state.dataLength - 1,
        };
      } else {
        return {
          data: state.data.filter((item) => item.id !== payload.id),
          dataLength: state.dataLength - 1,
        };
      }

    case ActionTypes.MAKE_CART_EMPTY:
      return {
        data: [],
        dataLength: 0,
      };

    case ActionTypes.SET_CART:
      return {
        data: payload.data,
        dataLength: payload.dataLength,
      };

    default:
      return state;
  }
};
