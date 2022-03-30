import React, { useEffect, useState } from "react";
import "./Profile.css";
import Form from "../../Molecules/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { logOut, setUser } from "../../redux/actions/userActions";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  cartDataSelector,
  ordersDataSelector,
  userDataSelector,
} from "../../redux/selectors";

function Profile() {
  const navigate = useNavigate();
  const user = useSelector(userDataSelector);
  const cart = useSelector(cartDataSelector);
  const orders = useSelector(ordersDataSelector);
  const dispatch = useDispatch();
  const formFieldDetails = [
    {
      fieldId: "username",
      label: "Username",
      defaultValue: user.username,
      order: 2,
      type: "text",
    },
    {
      fieldId: "firstname",
      label: "First Name",
      defaultValue: user.firstname,
      order: 3,
      type: "text",
    },
    {
      fieldId: "lastname",
      label: "Last Name",
      defaultValue: user.lastname,
      order: 4,
      type: "text",
    },
    {
      fieldId: "email",
      label: "Email",
      defaultValue: user.email,
      order: 1,
      type: "text",
    },
    {
      fieldId: "phone",
      label: "Phone",
      defaultValue: user.phone,
      order: 5,
      type: "text",
    },
    {
      fieldId: "gender",
      label: "Gender",
      defaultValue: user?.gender,
      order: 6,
      type: "radio",
      otherProps: {
        options: ["Male", "Female", "Other"],
      },
    },
    {
      fieldId: "hobbies",
      label: "Hobbies",
      defaultValue: user.hasOwnProperty("hobbies") ? user.hobbies : [],
      order: 7,
      type: "checkbox",
      otherProps: {
        options: ["Reading", "Traveling", "TV Series"],
      },
    },
  ];

  formFieldDetails.sort((a, b) =>
    a.order > b.order ? 1 : b.order > a.order ? -1 : 0
  );

  const handleEditProfile = (formEntriesList) => {
    formEntriesList = { ...formEntriesList, id: user.id };
    dispatch(setUser(formEntriesList));
  };

  const handleSignOut = () => {
    localStorage.setItem(
      `user${user.id}`,
      JSON.stringify({ user: user, cart: cart, orders: orders })
    );
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div className="profile">
      <div className="profileContainer">
        <div className="profileImgContainer">
          <img
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/112139693/original/b70fa216317d4f9409230471e9727aeb624afe74/draw-minimalist-flat-line-art-avatar-in-vector-of-you.jpg"
            alt="Loading..."
            className="profileImg"
          />
        </div>
        <Form
          formFieldDetails={formFieldDetails}
          submitForm={handleEditProfile}
          submitBtnTextContent="Sava Changes"
        />
        <Button
          variant="outline-dark"
          className="signOutBtn"
          onClick={handleSignOut}
        >
          Sign Out{" "}
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="signOutBtnIcon"
          />
        </Button>
      </div>
    </div>
  );
}

export default Profile;
