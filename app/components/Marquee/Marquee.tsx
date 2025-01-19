"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import RedStar from "../RedStar";

interface Data {
  text: string;
}

const data: Data[] = [
  {
    text: "Nibbles",
  },
  {
    text: "Fries",
  },
  {
    text: "Hotdogs",
  },
  {
    text: "Burgers",
  },
];

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="bg-white py-2 border-t-8 border-b-8 border-red">
        <div className="container mx-auto text-center">
          <div>
            <Slider {...settings}>
              {data.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-around">
                    <p className="text-4xl font-superstar text-blue">
                      {item.text}
                    </p>
                    <RedStar />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
