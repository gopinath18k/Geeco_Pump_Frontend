import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing_Banner.css";

import Landing_Banner_1 from "../../../assets/Geeco_Landing_Banners.webp";
import Landing_Banner_2 from "../../../assets/Geeco_Landing_Banners_Two.webp";
import Landing_Banner_3 from "../../../assets/Geeco_Landing_Banners_Three.webp";

function LandingBanner() {
  return (
    <Carousel
      className="landing-banner"
      fade
      interval={5000}
      controls={true}
      indicators={true}
    >
      {[  
        { img: Landing_Banner_2, title: "Agriculture Pumps", desc: "Efficient Pumping Solutions for Modern Farming." },
        { img: Landing_Banner_1, title: "Commercial Pumps", desc: "Reliable Pumping Solutions for Commercial Infrastructure" },
        { img: Landing_Banner_3, title: "Industrial Pumps", desc: "High-Performance Pumps for Heavy-Duty Industrial Applications" },
        
      ].map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="banner-img" src={slide.img} alt={slide.title} />
          <Carousel.Caption>
            <h2 className="banner-title">{slide.title}</h2>
            <p className="banner-desc">{slide.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default LandingBanner;
