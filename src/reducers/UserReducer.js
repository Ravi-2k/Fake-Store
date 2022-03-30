export const initialUserState = {
  isLoggedIn: false,
  userId: 0,
  cartSize: 0,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        isLoggedIn: true,
        userId: action.payLoad,
        cartSize: JSON.parse(localStorage.getItem(`user${action.payLoad}`)).cart
          .length,
      };
    case "LOG_OUT":
      return {
        isLoggedIn: false,
        userId: 0,
        cartSize: 0,
      };
    case "EDIT_CARTSIZE":
      return {
        ...state,
        cartSize: action.payLoad,
      };
    default:
      return state;
  }
};

export default userReducer;
