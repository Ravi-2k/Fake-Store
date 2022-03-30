import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDolly } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { cartSizeSelector } from "../../redux/selectors";

function Navbar() {
  const cartSize = useSelector(cartSizeSelector);

  return (
    <div className="navBar">
      <h1 className="navBarHeading">
        <FontAwesomeIcon icon={faDolly} className="navBarHeadingIcon" />
        Fake Store
      </h1>
      <div className="navBarOptions">
        <Link to="/" className="navBarOption">
          Home
        </Link>
        <Link to="/products" className="navBarOption">
          Products
        </Link>
        <Link to="/about" className="navBarOption">
          About Us
        </Link>
        <Link to="/orders" className="navBarOption">
          Orders
        </Link>
      </div>
      <div className="navBarCartAndAvatar">
        <Button
          as={Link}
          to="/cart"
          variant="outline-dark"
          className="navBarCartBtn"
        >
          Cart {cartSize}
        </Button>
        <Link to="/profile">
          <Avatar
            src={
              "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/112139693/original/b70fa216317d4f9409230471e9727aeb624afe74/draw-minimalist-flat-line-art-avatar-in-vector-of-you.jpg"
            }
            className="navBarAvatar"
            style={{ height: "4rem", width: "4rem" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
