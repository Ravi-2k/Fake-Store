import React from "react";

function handleCartSession(cart) {
  localStorage.setItem("CartSession", JSON.stringify([]));

  const cartItemsList = JSON.parse(localStorage.getItem("CartSession"));

  cart.map((cartItem) => {
    const found = cartItemsList.some((item) => item.id === cartItem.id);
    if (!found) {
      cartItemsList.push({ id: cartItem.id, quantity: 1 });
    } else {
      const indexOfFoundItemObject = cartItemsList.findIndex(
        (itemObj) => itemObj.id === cartItem.id
      );
      cartItemsList[indexOfFoundItemObject].quantity += 1;
    }
  });

  localStorage.setItem("CartSession", JSON.stringify(cartItemsList));

  return cartItemsList;
}

export default handleCartSession;
