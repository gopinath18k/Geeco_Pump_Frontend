import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "./Cardslider.css";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import Agriculture from "../../../assets/agri.webp";
import Industrial from "../../../assets/ind.webp";
import Commercial from "../../../assets/com.webp";
import Residential from "../../../assets/res.webp";

const multiData = [
  { img: Agriculture, title: "Agriculture", viewmore: "View More" ,link: "/agriculture-pump-categories"},
  { img: Industrial, title: "Industrial", viewmore: "View More" ,link: "/industrial-pump-categories"},
  { img: Commercial, title: "Commercial", viewmore: "View More" ,link: "/commercial-pump-categories"},
  { img: Residential, title: "Residential", viewmore: "View More" ,link: "/domestic-pump-categories"},
  { img: Industrial, title: "Industrial", viewmore: "View More" ,link: "/industrial-pump-categories"},
];

const Cardslider = () => {
  return (
    <div className="BootstrapMulti">

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev custom-swiper-prev">
        <ArrowBackIos className="card_leftarrow_icon" />
      </div>

      <div className="swiper-button-next custom-swiper-next">
        <ArrowForwardIos className="card_rightarrow_icon" />
      </div>

      <div className="card_slider_containers">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".custom-swiper-prev",
            nextEl: ".custom-swiper-next",
          }}
          speed={900}
          cssMode={false}
          loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          spaceBetween={20}
          slidesPerView={3}
          effect="slide"
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            500: { slidesPerView: 1 },
            320: { slidesPerView: 1 },
          }}
        >
          {multiData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <Link to={item.link} className="card_link_wrapper" onClick={() => window.scrollTo(0, 0)}>
      <div className="card_slider_inner_containers">
        <img className="multi__image" src={item.img} alt={item.title} />

        <div className="slider_carousel_container">
          <p className="slider_heading">{item.title}</p>
          <p className="viewmore_heading">{item.viewmore}</p>
        </div>
      </div>
    </Link>
  );
};

export default Cardslider;
