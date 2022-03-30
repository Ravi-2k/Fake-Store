import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../Molecules/Form/Form";
import { setOrder } from "../../redux/actions/orderActions";
import { makeCartEmpty } from "../../redux/actions/cartActions";
import CheckoutCartItem from "../CheckoutCartItem/CheckoutCartItem";
import "./Checkout.css";
import { cartDataSelector, userDataSelector } from "../../redux/selectors";

function Checkout() {
  let navigate = useNavigate();
  const cart = useSelector(cartDataSelector);
  const user = useSelector(userDataSelector);
  const dispatch = useDispatch();
  const formFieldDetails = [
    {
      fieldId: "email",
      label: "Email",
      defaultValue: user.email,
      order: 2,
      type: "text",
      otherProps: {},
    },
    {
      fieldId: "phone",
      label: "Phone",
      defaultValue: user.phone,
      order: 1,
      type: "text",
      otherProps: {},
    },
    {
      fieldId: "address",
      label: "Address",
      defaultValue:
        "B-303, Dutt Avenue, Sciencecity Road, Sola, Ahmedabad, 380060",
      order: 3,
      type: "text",
      otherProps: {},
    },
  ];

  const handleCheckoutFormSubmit = (formEntriesList) => {
    navigate("/orders");
    const currDateObj = new Date();
    dispatch(
      setOrder({
        order: cart,
        orderDetails: {
          ...formEntriesList,
          timeStamp: currDateObj.toLocaleString(),
        },
      })
    );
    dispatch(makeCartEmpty());
  };

  return (
    <div className="checkout">
      <Button
        as={Link}
        to="/cart"
        variant="outline-dark"
        className="checkoutBackToCartBtn"
      >
        Edit Your Cart
      </Button>
      <div className="checkoutItemsContainer">
        {cart.map((cartItem) => {
          return (
            <CheckoutCartItem
              key={cartItem.id}
              item={cartItem}
              quantity={cartItem.quantity}
            />
          );
        })}
      </div>
      <div className="checkoutFormContainer">
        <Form
          formFieldDetails={formFieldDetails}
          submitForm={handleCheckoutFormSubmit}
          submitBtnTextContent="Place An Order"
        />
      </div>
    </div>
  );
}

export default Checkout;
