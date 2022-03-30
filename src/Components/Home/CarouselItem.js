import React from "react";
import "./CarouselItem.css";
import { Carousel } from "react-bootstrap";

function CarouselItem({ product }) {
  return (
    <>
      <img
        className="d-block carouselImage"
        src={product.image}
        alt="Loading.."
      />
      <div className="carouselItemInfo">
        <h3>{product.title.substring(0, 20)}</h3>
        <p>{product.description.substring(0, 30)}</p>
      </div>
    </>
  );
}

export default CarouselItem;
