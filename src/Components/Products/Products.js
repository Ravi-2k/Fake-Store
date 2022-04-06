import React, { useState, useEffect } from "react";
import Category from "../Category";
import "./Products.css";
import { Button } from "react-bootstrap";
import Loading from "../Loading";
import useGetProducts from "../../CustomHooks/useGetProducts";

const END_POINT = "https://fakestoreapi.com/products/categories";

function Products() {
  const { categories, categoryWiseProductsList, loading } =
    useGetProducts(END_POINT);
  const [filteredCategory, setFilteredCategory] = useState(categories);

  useEffect(() => {
    if (!loading) {
      setFilteredCategory(categories);
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
              products={categoryWiseProductsList[category]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
