import React from 'react'
import { TbWorld } from "react-icons/tb";
import { TbSunglasses } from "react-icons/tb";
import { GiThorHammer } from "react-icons/gi";

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="hero-content">
        <div className="hero-text">
           <h1>WE HELP <span>NFT </span><>&#x1F9E0;</><br />PROJECTS LAUNCH</h1>
        </div>
        <div className="hero-info">
            <p><span className='hero-icon-color'><TbWorld /></span> <span className='hero-slash-color'>/</span> BASED IN UNITED STATES & WORKING WORLDWIDE</p>
            <p><span className='hero-icon-color'><TbSunglasses /></span> <span className='hero-slash-color'>/</span> YEARS OF BLOCKCHAIN EXPERIENCE</p>
            <p><span className='hero-icon-color'><GiThorHammer /></span> <span className='hero-slash-color'>/</span> ©2022 NFTDEVS ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  )
}

export default Hero