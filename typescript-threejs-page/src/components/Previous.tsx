import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import nft from '../images/white-nft.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Previous = () => {
  const clients = [
    { id: 1, image: nft, name: 'Croco' },
    { id: 2, image: nft, name: 'TToco' },
    { id: 3, image: nft, name: 'QRSTV' },
    { id: 4, image: nft, name: 'JJOK' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="previous-container">
      <div className="previous-content">
        <div className="previous-title">
          <h1>
            <span className="color-green">
              <MdDoubleArrow />
            </span>
            PREVIOUS CLIENTS
          </h1>
        </div>

        <div className="clients-container">
        <Slider {...settings}>
            {clients.map((item) => (
              <div className="clients-content" key={item.id}>
                <div className="clients-card">
                  <img src={item.image} alt="pic" />
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Previous;
