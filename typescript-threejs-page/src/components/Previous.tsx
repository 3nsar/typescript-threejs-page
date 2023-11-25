import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import nft from '../images/white-nft.jpg';

const Previous = () => {
  const clients = [
    {
      id: 1,
      image: nft,
      name: 'Croco',
    },
    {
      id: 2,
      image: nft,
      name: 'TToco',
    },
    {
      id: 3,
      image: nft,
      name: 'QRSTV',
    },
    {
      id: 4,
      image: nft,
      name: 'JJOK',
    },
  ];

  return (
    <div className="previous-container">
      <div className="previous-content">
        <div className="previous-title">
          <h1>
            <span className="color-green">
              <MdDoubleArrow />
            </span>
            PREVIOUS CLIENTS
          </h1>
        </div>
        {clients.map((item) => (
          <div
            className='clients-container'
            key={item.id}
            style={{ backgroundImage: `url(${item.image})`}}
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Previous;
