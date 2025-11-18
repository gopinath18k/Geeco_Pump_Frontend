import React, { useState } from 'react'
import Logo from "../../../assets/Geeco Logo.webp"
import "./Navbar.css"
import { IoIosCall,IoIosMail } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {


    const [menuopen,setMenuopen]=useState(false);
    const handleClickMenu=()=>{
        setMenuopen(!menuopen)
    }
    const closeMenu=()=>{
        setMenuopen(false)
    }
    React.useEffect(() => {
    if (menuopen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    }, [menuopen]);



  return (
    <section className="Navbar">
        <div className="section__Navbar" >
            
            <div className="Navbar__container col-6 col-sm-6 col-md-6 col-lg-2">
                <img src={Logo} alt="" className='logo__image'/>
            </div>
            <div onClick={handleClickMenu} className="Navbar__Mobile col-6 col-sm-6">
                {menuopen?<IoCloseOutline className='Nav__Mobile__Icons'/>:<RxHamburgerMenu className='Nav__Mobile__Icons'/>}
            </div>
            <div className="Navbar__container Nav_Menus col-10 col-lg-10">
                <div className="Navbar__Allmenu">
                    <Link to="/" className="Nav_Home" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                    <Link to="/all-pumps-categories" className="Nav_All_Pumps" onClick={() => window.scrollTo(0, 0)}>All Pumps</Link>
                    <Link to="/pump-selection-tool" className="Nav_Pump_Selection_Tool" onClick={() => window.scrollTo(0, 0)}>Pump Selection Tool</Link>
                    <Link to="/warranty-registration" className="Nav_Warranty_Registration text__menu__red" onClick={() => window.scrollTo(0, 0)}>Warranty Registration</Link>
                    <Link to="/contact-us" className="Nav_About_Us" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
                </div>     
               
                <div className="Navbar__contacts col-4">
                    <div className="Navbar_contactdetails">
                        <IoIosCall className='Navbar_callIcon'/>
                        <a href="ToNumber" className="Navbar__contactNumberdetails">987 654 12 30</a>
                    </div>
                    <div className="Navbar_contactdetails">
                        <IoIosMail className='Navbar_MailIcon'/>
                        <a href="ToMail" className="Navbar__contactMaildetails">geecopumps@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        <div className={menuopen ? "Navbar__MobileMenu active":"Navbar__MobileMenu"}>
            <div className="Navbar__AllMobilemenu">
                <NavLink 
                    to="/" 
                    onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
                    className={({ isActive }) => isActive ? "Nav_Mobile_Link active" : "Nav_Mobile_Link"}
                >
                    Home
                </NavLink>

                <NavLink 
                    to="/all-pumps-categories" 
                    onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
                    className={({ isActive }) => isActive ? "Nav_Mobile_Link active" : "Nav_Mobile_Link"}
                >
                    All Pumps
                </NavLink>

                <NavLink 
                    to="/pump-selection-tool" 
                    onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
                    className={({ isActive }) => isActive ? "Nav_Mobile_Link active" : "Nav_Mobile_Link"}
                >
                    Pump Selection Tool
                </NavLink>

                <NavLink 
                    to="/warranty-registration" 
                    onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
                    className={({ isActive }) => isActive ? "Nav_Mobile_Link active" : "Nav_Mobile_Link"}
                >
                    Warranty Registration
                </NavLink>

                <NavLink 
                    to="/contact-us" 
                    onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
                    className={({ isActive }) => isActive ? "Nav_Mobile_Link active" : "Nav_Mobile_Link"}
                >
                    Contact Us
                </NavLink>
            </div>
            <div className="Navbar__SocialIcons">
                <Link><RiInstagramFill className='Navbar_Mobile_Icons'/></Link>
                <Link><FaLinkedin  className='Navbar_Mobile_Icons'/></Link>
                <Link><FaFacebookSquare  className='Navbar_Mobile_Icons'/></Link>
                <Link><FaSquareXTwitter  className='Navbar_Mobile_Icons'/></Link>
            </div>

        </div>
    </section>
  )
}

