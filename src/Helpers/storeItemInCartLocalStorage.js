function storeItemInCart(userId, product) {
  let { user, cart, orders } = JSON.parse(
    localStorage.getItem(`user${userId}`)
  );

  cart = [...cart, product];
  cart.sort((item1, item2) =>
    item1.id > item2.id ? 1 : item2.id > item1.id ? -1 : 0
  );

  localStorage.setItem(
    `user${userId}`,
    JSON.stringify({ user, cart: cart, orders })
  );

  return cart.length;
}

export default storeItemInCart;
