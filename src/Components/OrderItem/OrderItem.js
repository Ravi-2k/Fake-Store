import React from "react";
import "./OrderItem.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function OrderItem({ item, quantity }) {
  return (
    <div className="orderItem">
      <div className="orderItemImageContainer">
        <img src={item.image} alt="Loading..." />
      </div>
      <div className="orderItemInfoContainer">
        <h4 className="orderItemInfoCategory">{item.category}</h4>
        <h2 className="orderItemInfoTitle">{item.title.substring(0, 20)}</h2>
        <h2 className="orderItemInfoPrice">
          {quantity} x <span className="bold"> ${item.price}</span>
          {"  "} ={"  "}
          <span className="bold"> ${item.price * quantity}</span>
        </h2>
        <p className="orderItemInfoDesc">{item.description.substring(0, 30)}</p>
        <Button
          as={Link}
          to={`/products/${item.id}`}
          variant="outline-dark"
          className="orderItemVisitItemBtn"
        >
          Visit
        </Button>
      </div>
    </div>
  );
}

export default OrderItem;
