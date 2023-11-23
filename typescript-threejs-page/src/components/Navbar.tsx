import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleNavClick = () => {
    setShowNav(false);
    window.scrollTo(0, 0); // Scroll to the top
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={`nav-container  ${isSticky ? 'sticky' : ''}`}>
      <h1 >NFTDEVS</h1>

      <div className='nav-icon' onClick={toggleNav}>
        {showNav ? <AiOutlineClose fontSize="25px" /> : <FaBars fontSize="25px" />}
      </div>

      <ul className={`nav-list ${showNav ? 'show' : ''}`}>
        <li >HOME</li>
        <li >SERVICES</li>
        <li >PARTNERS</li>
        <li>CLIENTS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default Navbar;
