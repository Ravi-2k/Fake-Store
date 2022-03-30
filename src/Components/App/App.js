import "./App.css";
import Home from "../Home";
import Products from "../Products";
import Product from "../Product";
import Cart from "../Cart";
import AppSkeleton from "../AppSkeleton";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Checkout from "../Checkout/Checkout";
import Orders from "../Orders/Orders";
import { useSelector } from "react-redux";
import { userLoggedInStatusSelector } from "../../redux/selectors";

function App() {
  const userLoggedIn = useSelector(userLoggedInStatusSelector);

  return (
    <Router>
      {userLoggedIn ? (
        <AppSkeleton>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<Orders />} />
          </Routes>
        </AppSkeleton>
      ) : (
        <Routes>
          <Route exact path="/" element={userLoggedIn ? <Home /> : <Login />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
