import { ActionTypes } from "../constants/action-types";

const initialState = {
  data: {},
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        data: action.payload,
        isLoggedIn: true,
      };

    case ActionTypes.LOG_OUT:
      return {
        data: {},
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
