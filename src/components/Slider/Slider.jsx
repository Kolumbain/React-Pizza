import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import { pizzaBlock } from "../../data/database";
import './Slider.css'
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";

export default class UnevenSetsFinite extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 700,
      slidesToScroll: 3,
      slidesToShow: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider {...settings}>
          {pizzaBlock.map((pizza) => (
            <div className="PizzaSlider">
              <img src={pizza.image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
