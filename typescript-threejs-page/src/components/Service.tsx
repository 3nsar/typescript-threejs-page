import React from 'react'
import trippy1 from "../assets/hand-weird.gif"
import trippy2 from "../assets/weirdhead.gif"
import trippy3 from "../assets/trippy-head.gif"



const Service = () => {
  return (
    <div className='service-container'>
        <div className="service-content">
          <div className="service-text">
            <h1>OUR SERVICE</h1>
          </div>
          <div className="service-parts-container">
              <div className="service-parts-content">
                <div className="service-parts-card">
                  <p>S/1</p>
                  <h1>AUDITING</h1>
                  <p>Our team will perform a full audit on your smart contract to ensure all security
                     measures have been carried out efficiently and effectively before launch. We will then break down any issues we may find into a written report, which we will then review in depth with your team.</p>
                  <img src={trippy3} alt="pic" height="150px"/>
                </div>
                <div className="service-parts-card">
                  <p>S/2</p>
                  <h1>CONTRACT BUILD</h1>
                  <p>If you're starting a project, finding developers you can trust and have a proven track record can be very difficult. Our team has worked extremely hard since we opened our doors to become the premier brand we are today.
                     Feel free to touch base with us and see for yourself why so many choose Web Three.</p>
                  <img src={trippy2} alt="pic" height="150px"/>
                </div>
                <div className="service-parts-card">
                  <p>S/3</p>
                  <h1>REBUILD</h1>
                  <p>If for any reason we do find a high risk issue in the contract close to your launch, we can assess the situation and offer a full rebuild in a timely manner. We have saved several projects from their mints failing,
                     and it's a service we have become very well known for in the nft community.</p>
                  <img src={trippy1} alt="pic" height="150px"/>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Service