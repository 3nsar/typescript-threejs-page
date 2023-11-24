import React from 'react'
import { MdDoubleArrow } from "react-icons/md";


const Partners = () => {
  return (
    <div className='partners-container'>
        <div className="partners-content">
            <div className="partners-title">
                <h1><span className='color-green'><MdDoubleArrow/></span>OUR PARTNERS</h1>
            </div>

            <div className="partner-card-1">
              <div className="marquee-w">
               <div className="marquee">
                <span>NEWERAMONKEY NEWERAMONKEY NEWERAMONKEY NEWERAMONKEY NEWERAMONKEY</span>
               </div>
              </div>
            </div>

            <div className="partner-card-2">
             <div className="marquee-w">
               <div className="marquee">
                <span>WHITEHYPE WHITEHYPE WHITEHYPE WHITEHYPE WHITEHYPE</span>
               </div>
              </div>
            </div>

            <div className="partner-card-3">
              <div className="marquee-w">
                <div className="marquee">
                    <span>ROBOAPE ROBOAPE ROBOAPE ROBOAPE ROBOAPE</span>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Partners