import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Product.css";
import Loading from "../Loading";
import useHttpGetRequest from "../../CustomHooks/useHttpGetRequest";
import { useDispatch } from "react-redux";
import { addProductInCart } from "../../redux/actions/cartActions";

function Product() {
  const { id } = useParams();
  const END_POINT = `https://fakestoreapi.com/products/${id}`;
  const { payLoad: product, loading } = useHttpGetRequest(END_POINT);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProductInCart(product));
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="product">
      <div className="productImageContainer">
        <img src={product.image} alt="Loading" />
      </div>
      <div className="productInfoContainer">
        <h3 className="productInfoContainerCategory">{product.category}</h3>
        <p className="productInfoContainerTitle">{product.title}</p>
        <h1 className="productInfoContainerPrice">$ {product.price}</h1>
        <p className="productInfoContainerDesc">{product.description}</p>
        <Button variant="outline-dark" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button
          as={Link}
          to={`/cart`}
          variant="outline-dark"
          className="productInfoContainerCartBtn"
        >
          Visit Cart
        </Button>
      </div>
    </div>
  );
}

export default Product;
