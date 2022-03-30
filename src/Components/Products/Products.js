import React, { useState, useEffect } from "react";
import Category from "../Category";
import "./Products.css";
import { Button } from "react-bootstrap";
import Loading from "../Loading";
import useHttpGetRequest from "../../CustomHooks/useHttpGetRequest";
import useHttpGetRequests from "../../CustomHooks/useHttpGetRequests";

const END_POINT = "https://fakestoreapi.com/products/categories";

function Products() {
  const { payLoad: categories, loading } = useHttpGetRequest(END_POINT, "");
  const [filteredCategory, setFilteredCategory] = useState(categories);
  // let httpResponse;

  useEffect(() => {
    if (!loading && categories.length) {
      setFilteredCategory(categories);
      // const categoryWiseUrlList = [];
      // categories.forEach((category) =>
      //   categoryWiseUrlList.push(
      //     `https://fakestoreapi.com/products/categories/${category}`
      //   )
      // );
      // httpResponse = useHttpGetRequests(categoryWiseUrlList);
    }
  }, [loading]);

  const getFilteredCategory = (e) => {
    const valueToSet =
      e.target.textContent === "All" ? categories : [e.target.textContent];
    setFilteredCategory(valueToSet);
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="products">
      <div className="productsFilter">
        <Button
          variant="outline-dark"
          className="productsFilterBtn"
          onClick={getFilteredCategory}
        >
          All
        </Button>
        {categories.map((category, idx) => {
          return (
            <Button
              key={idx}
              variant="outline-dark"
              className="productsFilterBtn"
              onClick={getFilteredCategory}
            >
              {category}
            </Button>
          );
        })}
      </div>
      <div className="productsContainer">
        {filteredCategory.map((category, idx) => {
          return (
            <Category
              key={idx}
              category={category}
              showLoadingSpinner={
                !(filteredCategory.length === categories.length && idx > 0)
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
