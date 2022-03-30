function getCartSize(cart) {
  let cartSize = 0;
  cart.forEach((item) => {
    cartSize += item.quantity;
  });
  return cartSize;
}

export default getCartSize;
