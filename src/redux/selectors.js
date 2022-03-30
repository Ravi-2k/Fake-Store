export const userDataSelector = (state) => state.user.data;

export const userLoggedInStatusSelector = (state) => state.user.isLoggedIn;

export const cartDataSelector = (state) => state.cart.data;

export const cartSizeSelector = (state) => state.cart.dataLength;

export const ordersDataSelector = (state) => state.orders.data;
