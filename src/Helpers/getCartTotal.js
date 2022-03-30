import React from "react";

function getCartTotal(cart) {
  if (!cart.length) return 0;

  let cartTotal = 0;
  cart.forEach((item) => {
    for (let i = 0; i < item.quantity; i++) {
      cartTotal += item.price;
    }
  });

  return cartTotal;
}

export default getCartTotal;
