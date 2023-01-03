import * as React from "react";

const HeroParallax = ({ offsetY }: { offsetY: number }) => {
  return (
    <header className="hero-container parallax__group">
      <div className="title-container" style={{}}>
        <h1 style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          Xtravaganza
          <br /> <span>2.0</span>
        </h1>
      </div>
      <div
        className="parallax__layer sky"
        style={{ transform: `translateY(${offsetY * 0.65}px)` }}
      ></div>
      <div
        className="parallax__layer bushes"
        style={{ transform: `translateY(${offsetY * 0.64}px)` }}
      ></div>
      <div
        className="parallax__layer water"
        style={{ transform: `translateY(${offsetY * 0.58}px)` }}
      ></div>
      <div
        className="parallax__layer people1"
        style={{ transform: `translateY(${offsetY * 0.29}px)` }}
      ></div>
      <div
        className="parallax__layer people2"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      ></div>
      <div className="parallax__layer people3"></div>
      <div className="parallax__layer overlay"></div>
    </header>
  );
};

export default HeroParallax;
