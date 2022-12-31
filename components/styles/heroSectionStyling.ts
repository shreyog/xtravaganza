// @ts-nocheck

import HeroSkyURL from "../../images/hero/sky.png";
import HeroBushesURL from "../../images/hero/bushes.png";
import HeroWaterURL from "../../images/hero/water.png";
import HeroPeople1URL from "../../images/hero/people1.png";
import HeroPeople2URL from "../../images/hero/people2.png";
import HeroPeople3URL from "../../images/hero/people3.png";

const HERO_SECTION_STYLING = `

  .hero-container {
    position: relative;
    height: 100vh;
  }

  .hero-container:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    z-index: 6;
    background: linear-gradient(to top, #000000 30%, transparent)
  }
  
  .parallax__group {
    overflow: hidden;
  }
  
  .parallax__layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .sky {
    background: url(${HeroSkyURL}) no-repeat center;
    background-size: cover;
    z-index: 1;
  }
  
  .title-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  
  .title-container h1 {
    font-family: sans-serif;
    font-weight: 400;
    position: absolute;
    font-size: 4rem;
    text-align: center;
  }
  
  .title-container h1:nth-of-type(1) {
    position: relative;
  }
  
  .title-container h1:nth-of-type(1) span {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: -70%;
  }
  
  .bushes {
    background: url(${HeroBushesURL}) no-repeat center;
    background-size: cover;
    z-index: 3;
  }
  
  .water {
    background: url(${HeroWaterURL}) no-repeat center;
    background-size: cover;
    z-index: 4;
  }
  
  .people1 {
    background: url(${HeroPeople1URL}) no-repeat center;
    background-size: cover;
    z-index: 5;
  }
  
  .people2 {
    background: url(${HeroPeople2URL}) no-repeat center;
    background-size: cover;
    z-index: 6;
  }
  
  .people3 {
    background: url(${HeroPeople3URL}) no-repeat center;
    background-size: cover;
    z-index: 7;
  }
  
  .overlay {
    background: linear-gradient(
      rgba(105, 211, 252, 0.25) 0%,
      rgba(255, 116, 161, 0.25) 86%,
      rgba(1, 0, 0, 0.25) 100%
    );
    background-size: cover;
    transform: translateZ(0) scale(1);
    z-index: 8;
  }
  
  @media (min-width: 48em) {
    .title-container h1 {
      font-size: 6.5rem;
    }
  }
  
  @media (min-width: 64em) {
    .title-container h1 {
      font-size: 8.5rem;
    }
  }
  
  @media (min-width: 70.375em) {
    .sky,
    .bushes,
    .water,
    .people1,
    .people2,
    .people3,
    .hero-text {
      background-size: contain;
    }
  
    .title-container h1 {
      font-size: 8rem;
    }
  }
  
  

`;

export default HERO_SECTION_STYLING;
