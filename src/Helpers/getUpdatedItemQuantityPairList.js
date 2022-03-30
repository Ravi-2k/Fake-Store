import React from "react";

function getUpdatedItemQuantityPairList(action, itemQuantityPairList, product) {
  const prodIndexInPairList = itemQuantityPairList.findIndex(
    (pairObj) => pairObj.id === product.id
  );
  const updatedArray = itemQuantityPairList;
  updatedArray[prodIndexInPairList].quantity += action === "ADD" ? 1 : -1;

  if (!updatedArray[prodIndexInPairList].quantity) {
    updatedArray.splice(prodIndexInPairList);
  }

  localStorage.setItem("CartSession", JSON.stringify(updatedArray));

  return updatedArray;
}

export default getUpdatedItemQuantityPairList;
