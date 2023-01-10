import React from "react";
import { HorizontalTicker } from "react-infinite-ticker";

import {
  above5k,
  lessThen5KButAbove1k,
  lessThen5KButAbove1kList2,
  lessThen5KButAbove1kList3,
} from "@/data/sponsorsData";

const ParallaxText = ({
  names = [""],
  duration = 25000,
  reverse = false,
  className = "",
}) => {
  return (
    <div className="parallax">
      <HorizontalTicker duration={duration} reverse={reverse}>
        <div className="scroller">
          {React.Children.toArray(
            names.map((name: string) => (
              <span className={`text-fill ${className}`}>{name}</span>
            ))
          )}
        </div>
      </HorizontalTicker>
    </div>
  );
};

const Sponsors = () => {
  return (
    <section className="sponsor-container mb-6" style={{ marginTop: "1rem" }}>
      <h2 className="section-title fv-h2">Our Sponsor&apos;s</h2>

      <ParallaxText names={above5k} duration={90000} />
      <ParallaxText names={lessThen5KButAbove1k} reverse={true} duration={70000}/>
      <ParallaxText names={lessThen5KButAbove1kList2} duration={80000}/>
      <ParallaxText reverse={true} names={lessThen5KButAbove1kList3}duration={70000} />
    </section>
  );
};

export default Sponsors;
