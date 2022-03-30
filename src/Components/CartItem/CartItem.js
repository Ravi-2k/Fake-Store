import React, { useState } from "react";
import "./CartItem.css";
import { Button } from "react-bootstrap";

function CartItem({ item, quantity, onAdd, onRemove }) {
  const handleAdd = () => {
    onAdd(item);
  };

  const handleRemove = () => {
    onRemove(item);
  };

  return (
    <div className="cartItem">
      <div className="cartItemImageContainer">
        <img src={item.image} alt="Loading..." />
      </div>
      <div className="cartItemInfoContainer">
        <h4 className="cartItemInfoCategory">{item.category}</h4>
        <h2 className="cartItemInfoTitle">{item.title.substring(0, 20)}</h2>
        <h2 className="cartItemInfoPrice">
          {quantity} x <span className="bold"> ${item.price}</span>
          {"  "} ={"  "}
          <span className="bold"> ${item.price * quantity}</span>
        </h2>
        <p className="cartItemInfoDesc">{item.description.substring(0, 30)}</p>
        <div className="cartItemAddRemoveContainer">
          <Button
            variant="outline-dark"
            className="cartItemBtn"
            onClick={handleAdd}
          >
            +
          </Button>
          <Button
            variant="outline-dark"
            className="cartItemBtn"
            onClick={handleRemove}
          >
            -
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
