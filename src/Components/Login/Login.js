import React, { useEffect, useReducer, useState } from "react";
import "./Login.css";
import { Button } from "react-bootstrap";
import useHttpGetRequest from "../../CustomHooks/useHttpGetRequest";
import validateUser from "../../Helpers/validateUser";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/actions/userActions";
import getCartSize from "../../Helpers/getCartSize";
import { setCart } from "../../redux/actions/cartActions";
import { setOrders } from "../../redux/actions/orderActions";
import { useNavigate } from "react-router-dom";

const END_POINT = "https://fakestoreapi.com/users";

function Login() {
  const [inputs, setInputs] = useState({ userName: "", password: "" });
  const [users, setUsers] = useState([]);
  const { payLoad, loading } = useHttpGetRequest(END_POINT);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && payLoad.length) {
      setUsers(payLoad);
    }
  }, [loading]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currUser = validateUser(inputs, users, dispatch);
    if (localStorage.getItem(`user${currUser.id}`)) {
      const { user, cart, orders } = JSON.parse(
        localStorage.getItem(`user${currUser.id}`)
      );
      const cartSize = getCartSize(cart);
      dispatch(setUser(user));
      dispatch(setCart({ data: cart, dataLength: cartSize }));
      dispatch(setOrders(orders));
    }
    setInputs({ userName: "", password: "" });
    if (currUser) navigate("/");
  };

  return (
    <div className="login">
      <div className="loginFormContainer">
        <form action="#" className="loginForm">
          <h1 className="loginFormTitle">Fake Store</h1>
          <input
            type="text"
            id="usernameField"
            placeholder="Enter Username"
            name="userName"
            value={inputs.userName}
            onChange={handleChange}
          />
          <input
            type="text"
            id="passwordField"
            placeholder="Enter Password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
          <Button
            variant="outline-dark"
            className="loginBtn"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
