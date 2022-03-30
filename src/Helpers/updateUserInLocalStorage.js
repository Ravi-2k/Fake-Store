import React from "react";

function updateUserInLocalStorage(userDetails, userId) {
  const { user, cart, orders } = JSON.parse(
    localStorage.getItem(`user${userId}`)
  );

  localStorage.setItem(
    `user${userId}`,
    JSON.stringify({ user: userDetails, cart, orders })
  );
}

export default updateUserInLocalStorage;
