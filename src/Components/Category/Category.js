import React from "react";
import "./Category.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useHttpGetRequest from "../../CustomHooks/useHttpGetRequest";
import Loading from "../Loading";

function Category({ category, showLoadingSpinner }) {
  const END_POINT = `https://fakestoreapi.com/products/category/${category}`;
  const { payLoad: products, loading } = useHttpGetRequest(END_POINT, category);

  return loading ? (
    showLoadingSpinner ? (
      <Loading />
    ) : (
      <></>
    )
  ) : (
    <div className="category">
      <div className="categoryHeading">{category.toUpperCase()}</div>
      <div className="categoryProductContainer">
        {products.map((product) => {
          return (
            <div key={product.id} className="categoryProduct">
              <div className="categoryProductImgContainer">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="categoryProductInfoContainer">
                <p>{product.title.substring(0, 20)}</p>
                <p>$ {product.price}</p>
                <div className="categoryProductVisitBtn">
                  <Button
                    as={Link}
                    to={`/products/${product.id}`}
                    variant="outline-dark"
                  >
                    Visit
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default Category;
