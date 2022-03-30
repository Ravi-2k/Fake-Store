import { ActionTypes } from "../constants/action-types";

const initialState = {
  data: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ORDER:
      return {
        data: [...state.data, action.payload],
      };
    case ActionTypes.SET_ORDERS:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};
