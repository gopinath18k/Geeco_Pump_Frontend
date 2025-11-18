import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";

const multiData = [
  {
    title: "Naveen Raj",
    customer: "customer",
    stars: "★★★★★",
    Testimonial_paragraph:
      "We’ve been using Geeco Pumps in our manufacturing facility for over a year now, and the performance has been nothing short of exceptional. High flow rate, zero maintenance issues, and consistent output—exactly what we needed.",
  },
  {
    title: "Guna",
    customer: "customer",
    stars: "★★★★★",
    Testimonial_paragraph:
      "I’ve worked with a lot of pumps over the years, but Geeco stands out. Reliable, rugged, and extremely efficient even in the toughest conditions. We use it daily on-site and it hasn’t failed us once. Highly recommended for heavy-duty use.",
  },
  {
    title: "Saravanan",
    customer: "customer",
    stars: "★★★★★",
    Testimonial_paragraph:
      "Geeco Pumps have completely changed how we manage irrigation on our farms. The power consumption is low, and the output is fantastic. Plus, their customer support is responsive and helpful. It’s a great investment for anyone in agriculture.",
  },
  {
    title: "Vinayagam",
    customer: "customer",
    stars: "★★★★★",
    Testimonial_paragraph:
      "From installation to daily use, Geeco Pump has been a breeze. It’s efficient, quiet, and runs smoothly even during high-demand hours. We’ve cut downtime significantly since switching. One of the best operational decisions we’ve made.",
  },
];

const TestimonialCardslider = () => {
  return (
    <div className="BootstrapMulti_Testimonial">
      <div className="Testimonial_slider_containers">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          // autoplay={{
          //   delay: 2800,
          //   disableOnInteraction: false,
          // }}
          speed={900}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
            320: { slidesPerView: 1 },
          }}
          slidesPerView={3}
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
    <div className="Testimonial_slider_inner_containers">
      <div className="Testimonial_slider_carousel_container">
        <p className="Testimonial_slider_heading">{item.title}</p>
        <p className="Testimonial_Testimonial_customer_heading">
          {item.customer}
        </p>
        <p className="Testimonial_Testimonial_stars_heading">{item.stars}</p>
        <p className="Testimonial_Testimonial_paragraph_heading">
          {item.Testimonial_paragraph}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCardslider;
