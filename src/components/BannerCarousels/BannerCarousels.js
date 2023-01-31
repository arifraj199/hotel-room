import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../assets/hotel_banner/banner_01.jpg";
import banner2 from "../../assets/hotel_banner/banner_02.jpg";
import banner3 from "../../assets/hotel_banner/banner_03.jpg";

const BannerCarousels = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          height="550"
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="">Hotel X-CROSS</h1>
          <h5>The Most Beautiful Hotel in Bangladesh</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="550"
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="">Hotel X-CROSS</h1>
          <h5>The Most Beautiful Hotel in Bangladesh</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="550"
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="">Hotel X-CROSS</h1>
          <h5>The Most Beautiful Hotel in Bangladesh</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerCarousels;
