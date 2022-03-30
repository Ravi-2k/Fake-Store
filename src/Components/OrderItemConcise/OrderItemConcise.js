import React from "react";
import "./OrderItemConcise.css";

function OrderItemConcise({ orderItem }) {
  return (
    <div className="orderItemConcise">
      <div className="orderItemConciseImgContainer">
        <img
          src={orderItem.image}
          alt="Loading..."
          className="orderItemConciseImg"
        />
      </div>
      <div className="orderItemConciseInfoContainer">
        <h3>{orderItem.title.substring(0, 20)}</h3>
        <h5>
          {orderItem.quantity} x{" "}
          <span className="orderItemConciseInfoContainerBold">
            {" "}
            ${orderItem.price}
          </span>
          {"  "} ={"  "}
          <span className="orderItemConciseInfoContainerBold">
            {" "}
            ${orderItem.price * orderItem.quantity}
          </span>
        </h5>
      </div>
    </div>
  );
}

export default OrderItemConcise;
