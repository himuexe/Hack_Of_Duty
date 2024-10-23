// src/components/Sponsors/Sponsors.jsx
import React from 'react';
import SIGKDD from '../../assets/SIGKDD.png';
import SRM from '../../assets/SRM-logo.png';
import DSBS from '../../assets/DSBS.png';
import ACM from '../../assets/ACM.png';
import Devfolio from '../../assets/Devfolio.png';
import Polygon from '../../assets/Polygon.png';
import ETHIndia from '../../assets/ETHIndia.png';
import Aptos from '../../assets/Aptos.png';
import './Sponsors.css';

const Sponsors = () => {
  return (
    <div className="px-12 py-6 mb-8">
      <h2
        className="text-5xl lg:text-6xl mb-6 text-white text-center"
        style={{ fontFamily: 'Black Ops One, sans-serif' }}
      >
        OUR SPONSORS
      </h2>
      <div className="flex">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img className="sponsor-img" src={SIGKDD} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={ACM} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={DSBS} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={SRM} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={Devfolio} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={Polygon} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={ETHIndia} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={Aptos} alt="Img" />
            </div>

            <div className="slide">
              <img className="sponsor-img" src={SIGKDD} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={ACM} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={DSBS} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={SRM} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={Devfolio} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={Polygon} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={ETHIndia} alt="Img" />
            </div>
            <div className="slide">
              <img className="sponsor-img" src={Aptos} alt="Img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;