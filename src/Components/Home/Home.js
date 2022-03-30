import React, { useState } from "react";
import "./Home.css";
import Loading from "../Loading";
import useHttpGetRequest from "../../CustomHooks/useHttpGetRequest";
import { Carousel } from "react-bootstrap";
import CarouselItem from "./CarouselItem";

const END_POINT = "https://fakestoreapi.com/products";

function Home() {
  const { payLoad: products, loading } = useHttpGetRequest(END_POINT, "");

  return loading ? (
    <Loading />
  ) : (
    <div className="home">
      <Carousel className="carousel" variant="dark" indicators={false}>
        {products.map((product) => {
          return (
            <Carousel.Item key={product.id} className="carouselItem">
              <CarouselItem key={product.id} product={product} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Home;
