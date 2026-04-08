import React, { useRef, useState } from "react";
import "./Home.css"
import Video from "../../assets/video.mp4";
import Cardslider from "./Cardslider/Cardslider";
import Pumpbanner from "../../assets/pump-banner.png";
import Blog1 from "../../assets/blog 1.webp";
import Blog2 from "../../assets/blog 2.webp";
import Blog3 from "../../assets/blog 3.webp";
import Video_Banner from "../../assets/video-thumbline.webp";
import ourteam from "../../assets/our team.webp";
import TestimonialCardslider from "./Testimonial/Testimonial";
import { About } from "./About/About";
import UncontrolledExample from "./Landing_Banner/Landing_Banner";


  

export const Home = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* <div className="container-fluid home-landing-container">
        <div className="home-landing-inner-container">
          <div className="row">
            <div className="col-6 home-banner-first-col">
              <h3>HIGHLY EFFICIENT AND RELIABLE</h3>
              <h1>AGRI PUMPS</h1>
              <p>The GS2 pumps are high-performance, durable pumps designed for efficient fluid transfer across various applications. Known for their robust build and energy efficiency, these pumps ensure reliable operation, minimal maintenance, and optimal performance under demanding conditions. Perfect for industrial, agricultural, and commercial use.</p>
            </div>
            <div className="col-6 col home-banner-second-col"><img className='pumpbanner' src={Pumpbanner} alt="" srcset="" /></div>
          </div>
        </div>
      </div> */}
  
{/* ..................................................... Section Two ..................................................... */}

      <UncontrolledExample/>
      <div className="container-fluid home-section-two-container">
        <div className="home-section-two-inner-container">
          <h2>Industrial Pumps <span style={{color: "red"}}>Manufacturers</span></h2>
          <p>At Geeco Pumps, we are a globally renowned manufacturer of high-quality, innovative pump solutions. With decades of expertise in the industry, we specialize in designing and delivering a wide range of pumps tailored to meet the needs of diverse sectors, including industrial, agricultural, and commercial applications.</p>
          <p>Our commitment to excellence drives us to create cutting-edge, energy-efficient, and durable products that set new benchmarks in performance and reliability. Trusted by customers worldwide, Geeco Pumps is synonymous with innovation, quality, and unmatched customer satisfaction.</p>
          <p>With a strong presence in international markets, we continuously strive to provide exceptional solutions that empower businesses and industries to thrive. At Geeco Pumps, we don’t just build pumps—we build trust and long-lasting partnerships.</p>
        </div>
      </div>

      
 {/* ............................................. Section Three ............................................. */}

      <div className="home-section-three-container">
        <div className="home-section-three-inner-container">
          <h2>Sectors we serve</h2>
             <Cardslider/>
        </div>
       <div className="video-container">
        <video
          ref={videoRef}
          className="video-player"
          poster={Video_Banner}
          onClick={handleVideoClick}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       </div>
      </div>


{/* ............................................. Section Five ............................................. */}
      <div className="container-fluid home-section-five-container">
        <div className="home-section-five-firstinner-container">
          <h2>About Us</h2>
          <About/>
        </div>
      </div>

{/* ............................................. Section Six ............................................. */}
    <div className="container-fluid home-section-six-container">
        <div className="home-section-six-firstinner-container">
          <div className="Mission_container">
            <h2 className="Mission_Heading">Mission</h2>
            <p className="Mission_Paragraph">A borewell submersible pump is a specialized water pump designed to operate while fully submerged in water. It is primarily used for extracting water from deep borewells, wells, or underground reservoirs where the water table is significantly below the surface.</p>
          </div>
          <div className="vision_container">
            <h2 className="vision_Heading">Vision</h2>
            <p className="vision_Paragraph">A borewell submersible pump is a specialized water pump designed to operate while fully submerged in water. It is primarily used for extracting water from deep borewells, wells, or underground reservoirs where the water table is significantly below the surface.</p>
          </div>
        </div>
      </div>
{/* ............................................. Section Eight ............................................. */}

    <div className="container-fluid home-section-Eight-container">
        <div className="home-section-Eight-firstinner-container">
          <h2>Meet Our Team</h2>
          <div className="ourteam_container">
            <div className="ourteam_inner_image_container">
              <img src={ourteam} alt="our team" className="ourteam_image"/>
            </div>
            <div className="ourteam_inner_image_container">
              <img src={ourteam} alt="our team" className="ourteam_image"/>
            </div>
            <div className="ourteam_inner_image_container">
              <img src={ourteam} alt="our team" className="ourteam_image"/>
            </div>
            <div className="ourteam_inner_image_container">
              <img src={ourteam} alt="our team" className="ourteam_image"/>
            </div>
          </div>
          
        </div>
      </div>

 {/* ............................................. Section Nine ............................................. */}


      <div className="container-fluid home-section-nine-container">
        <div className="home-section-nine-firstinner-container">
          <h2>LATEST BLOG  <span style={{color: "red"}}>ARTICLE</span></h2>
        </div>
        <div className="home-section-nine-second-container">
          <div className="Blog_first_container">
            <img
              className="Blog_Images"
              src={Blog1}
              alt=""
            />
            <div className="Blog_content_container">
                <h3 className="Blog_Heanding">The Importance of High-Quality Pumps</h3>
                <p className="Blog_Paragraph">Pumps are the backbone of many industries, ensuring smooth operations in agriculture, manufacturing, and water management. Choosing a reliable pump can save businesses from costly downtime and repairs. At Geeco Pumps, we pride ourselves on delivering durable, efficient, and high-performance pumps that keep your operations running seamlessly.</p>
                <p className="Blog_Paragraph_Viewmore">Read More</p>
            </div>
          </div>
          <div className="Blog_second_container">
            <img
              className="Blog_Images"
              src={Blog2}
              alt=""
            />
            <div className="Blog_content_container">
                <h3 className="Blog_Heanding">The Importance of High-Quality Pumps</h3>
                <p className="Blog_Paragraph">Pumps are the backbone of many industries, ensuring smooth operations in agriculture, manufacturing, and water management. Choosing a reliable pump can save businesses from costly downtime and repairs. At Geeco Pumps, we pride ourselves on delivering durable, efficient, and high-performance pumps that keep your operations running seamlessly.</p>
                <p className="Blog_Paragraph_Viewmore">Read More</p>
            </div>

          </div>
          <div className="Blog_Third_container">
            <img
              className="Blog_Images"
              src={Blog3}
              alt=""
            />
            <div className="Blog_content_container">
                <h3 className="Blog_Heanding">The Importance of High-Quality Pumps</h3>
                <p className="Blog_Paragraph">Pumps are the backbone of many industries, ensuring smooth operations in agriculture, manufacturing, and water management. Choosing a reliable pump can save businesses from costly downtime and repairs. At Geeco Pumps, we pride ourselves on delivering durable, efficient, and high-performance pumps that keep your operations running seamlessly.</p>
                <p className="Blog_Paragraph_Viewmore">Read More</p>
            </div>
            
          </div>
        </div>
      </div>

{/* ............................................. Section Four ............................................. */}
      <div className="container-fluid home-section-fourth-container">
        <div className="home-section-fourth-firstinner-container">
          <h2>Testimonials</h2>
          <TestimonialCardslider/>
        </div>
      </div>

    </>
)}
          


      
      
        
        
        
              