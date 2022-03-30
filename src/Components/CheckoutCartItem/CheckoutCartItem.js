import React from "react";
import "./CheckoutCartItem.css";

function CheckoutCartItem({ item, quantity }) {
  return (
    <div className="checkoutCartItem">
      <div className="checkoutCartItemImageContainer">
        <img src={item.image} alt="Loading..." />
      </div>
      <div className="checkoutCartItemInfoContainer">
        <h4 className="checkoutCartItemInfoCategory">{item.category}</h4>
        <h2 className="checkoutCartItemInfoTitle">
          {item.title.substring(0, 20)}
        </h2>
        <h2 className="checkoutCartItemInfoPrice">
          {quantity} x <span className="bold"> ${item.price}</span>
          {"  "} ={"  "}
          <span className="bold"> ${item.price * quantity}</span>
        </h2>
        <p className="checkoutCartItemInfoDesc">
          {item.description.substring(0, 30)}
        </p>
      </div>
    </div>
  );
}

export default CheckoutCartItem;
