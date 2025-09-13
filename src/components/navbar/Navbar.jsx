import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css'
// import menu_open from 
// import {ReactComponent as NavbarLogo} from '../../assets/Navvar-logo.svg'

const Navbar = () => {

  const [setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right="0";
  };
  
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  };

  return (
    <div className="navbar">
        <img src="src\assets\Navvar-logo.png" alt="Test SVG" width="100" height="100" />
        <i className="fa-solid fa-2x fa-bars nav-mob-open" onClick={openMenu} ></i>
        <ul ref={menuRef} className="nav-menu">
            <i className="fa-solid fa-xmark nav-mob-close" onClick={closeMenu}></i>
            <li><AnchorLink className='anchor-link' href='#profile'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={30} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={30} href='#experience'><p onClick={() => setMenu("experience")}>Experience</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={30} href='#projects'><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink></li>           
        </ul>
        <AnchorLink className='anchor-link' offset={30} href='#contact'><div className="nav-connect">Connect with Me</div></AnchorLink>
    </div>
  )
}

export default Navbar