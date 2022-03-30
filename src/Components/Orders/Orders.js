import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import getCartTotal from "../../Helpers/getCartTotal";
import sortList from "../../Helpers/sortList";
import OffCanvas from "../../Molecules/OffCanvas/OffCanvas";
import { ordersDataSelector } from "../../redux/selectors";
import OrderItem from "../OrderItem/OrderItem";
import OrderItemConcise from "../OrderItemConcise/OrderItemConcise";
import "./Orders.css";

function Orders() {
  const orders = useSelector(ordersDataSelector);

  const [show, setShow] = useState(false);
  const [currOffCanvasOrderItems, setCurrOffCanvasOrderItems] = useState([]);

  sortList(orders, -1, 1);

  return (
    <div className="orders">
      <h1 className="ordersHeading">Your Recent Orders</h1>
      {orders.map((orderBundle, idx) => {
        const { order, orderDetails } = orderBundle;
        const orderTotal = getCartTotal(order);

        const handleClose = () => setShow(false);
        const handleShow = () => {
          setCurrOffCanvasOrderItems(order);
          setShow(true);
        };

        return (
          <div className="order" key={idx}>
            <div className="orderItems">
              {order.map((orderItem, idx) => {
                if (idx > 1) return;
                return <OrderItemConcise key={idx} orderItem={orderItem} />;
              })}
              <Button
                variant="outline-dark"
                onClick={handleShow}
                className="launchBtn"
              >
                Details {order.length > 2 && `(See Other ${order.length - 2})`}
              </Button>
            </div>
            <div className="orderDetails">
              <div className="orderDetailContainer">
                <div className="orderDetailLabel">Email</div>
                <div className="orderDetailValue">{orderDetails.email}</div>
              </div>
              <div className="orderDetailContainer">
                <div className="orderDetailLabel">Phone</div>
                <div className="orderDetailValue">{orderDetails.phone}</div>
              </div>
              <div className="orderDetailContainer">
                <div className="orderDetailLabel">Address</div>
                <div className="orderDetailValue">{orderDetails.address}</div>
              </div>
              <div className="orderDetailContainer">
                <div className="orderDetailLabel">Order Placed at</div>
                <div className="orderDetailValue">{orderDetails.timeStamp}</div>
              </div>
              <div className="orderDetailContainer">
                <div className="orderDetailLabel">Order Total</div>
                <div className="orderDetailValue">$ {orderTotal}</div>
              </div>
            </div>

            <OffCanvas
              show={show}
              onHideFunction={handleClose}
              placement="end"
              title="Details"
            >
              {currOffCanvasOrderItems.map((orderItem, idx) => {
                return (
                  <OrderItem
                    key={idx}
                    item={orderItem}
                    quantity={orderItem.quantity}
                  />
                );
              })}
            </OffCanvas>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
