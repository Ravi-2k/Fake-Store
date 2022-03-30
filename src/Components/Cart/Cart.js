import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import { Button } from "react-bootstrap";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addProductInCart,
  removeProductFromCart,
} from "../../redux/actions/cartActions";
import { useEffect } from "react";
import getCartTotal from "../../Helpers/getCartTotal";
import { cartDataSelector } from "../../redux/selectors";

function Cart() {
  const [cartTotal, setCartTotal] = useState(0);
  const cart = useSelector(cartDataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartTotal(getCartTotal(cart));
  }, [cart]);

  const handleAdd = (product) => {
    dispatch(addProductInCart(product));
  };

  const handleRemove = (product) => {
    dispatch(removeProductFromCart(product));
  };

  return (
    <div className="cart">
      <div className="cartTotalContainer">
        <h1 className="cartTotalContent">
          Cart Total <span className="cartTotal">${cartTotal}</span>
        </h1>
      </div>
      <div className="cartItemsContainer">
        {cart.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              item={cartItem}
              quantity={cartItem.quantity}
              onAdd={handleAdd}
              onRemove={handleRemove}
            />
          );
        })}
      </div>
      {cart.length ? (
        <Button
          as={Link}
          to="/checkout"
          variant="outline-dark"
          className="cartCheckOutBtn"
        >
          Checkout Your Cart
        </Button>
      ) : (
        <h1 className="emptyCartNotice">Your Cart is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
