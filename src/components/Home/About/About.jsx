import React from 'react'
import "./About.css"
import storyimage1 from "../../../assets/story 1.webp"
import storyimage2 from "../../../assets/story 2.webp"
import storyimage3 from "../../../assets/story 3.webp"
import storyimage4 from "../../../assets/story 4.webp"
import storyimage5 from "../../../assets/story 5.webp"
import line from "../../../assets/line.webp"

export const About = () => {
  return (
    <div className='About_Main_Conatiner'>
        <div className="about_main_content">
            <p className="about_paragraph_content">
                A Borewell submersible pump is a specialized water pump designed to operate while fully submerged in water. It is primarily used for extracting water from deep borewells, wells, or underground reservoirs where the water table is significantly below the surface. These pumps are efficient, compact, and built to withstand harsh conditions, often made of corrosion-resistant materials like stainless steel.. It is primarily used for extracting water from deep borewells, wells, or underground reservoirs where the water table is significantly below the surface.
            </p>
        </div>
        <div className="about_second_content">
            <div className="about_ourstory_content">
                <h2>Our Story</h2>
            </div>
            <div className="about_ourstory_img_containers">
                <div className="about_image_container_one">
                    <div className="about_first_content_container  order-2 order-md-1">
                        <p className="about_first_content">1988<br/>geeco pumps started</p>
                    </div>
                    <div className="about_image_container">
                        <img src={storyimage1} alt="geeco story" className='about_first_image'/>
                    </div>
                </div>
                <div className="about_image_container_line">
                    <img src={line} alt="geeco story line" className='about_line'/>
                </div>
                <div className="about_image_container_two">
                    
                    <div className="about_image_container">
                        <img src={storyimage2} alt="geeco story" className='about_first_image'/>
                    </div>
                    <div className="about_second_content_container">
                        <p className="about_second_content">1988<br/>geeco pumps started</p>
                    </div>
                </div>
                <div className="about_image_container_line">
                    <img src={line} alt="geeco story line" className='about_line'/>
                </div>
                <div className="about_image_container_one">
                    <div className="about_first_content_container  order-2 order-md-1">
                        <p className="about_first_content">1988<br/>geeco pumps started</p>
                    </div>
                    <div className="about_image_container">
                        <img src={storyimage3} alt="geeco story" className='about_first_image'/>
                    </div>
                </div>
                <div className="about_image_container_line">
                    <img src={line} alt="geeco story line" className='about_line'/>
                </div>
                <div className="about_image_container_two">
                    
                    <div className="about_image_container">
                        <img src={storyimage4} alt="geeco story" className='about_first_image'/>
                    </div>
                    <div className="about_second_content_container">
                        <p className="about_second_content">1988<br/>geeco pumps started</p>
                    </div>
                </div>
                <div className="about_image_container_line">
                    <img src={line} alt="geeco story line" className='about_line'/>
                </div>
                <div className="about_image_container_one">
                    <div className="about_first_content_container  order-2 order-md-1">
                        <p className="about_first_content">1988<br/>geeco pumps started</p>
                    </div>
                    <div className="about_image_container">
                        <img src={storyimage5} alt="geeco story" className='about_first_image'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
