import React from 'react';
import photos from '../../data';
import "./styles.scss"


const Featured = () => {
    const [firstUrl, secondUrl] = photos

    
    
  return (
      <section className="featured-section" data-scroll-section>
          <div className="featured-row-layout">
              <h6>Green</h6>
              <img src={firstUrl} alt="first" data-scroll />
          </div>
          <div className="featured-column-layout">
              <h6>Lily</h6>
              <img src={secondUrl} alt="second" data-scroll />
          </div>
      </section>
  );
};

export default Featured;
