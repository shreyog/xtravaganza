import React from "react";
import { HorizontalTicker } from "react-infinite-ticker";

import {
  above5k,
  above5kList2,
  lessThen5KButAbove1k,
  lessThen5KButAbove1kList2,
  lessThen5KButAbove1kList3,
  lessThen5KButAbove1kList4,
  lessThen5KButAbove1kList5,
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

      <ParallaxText names={above5k} />
      <ParallaxText
        reverse={true}
        names={above5kList2}
        className={"text-fill-light-purple"}
      />
      <ParallaxText
        names={lessThen5KButAbove1k}
        className={"text-fill-navy-blue"}
      />
      <ParallaxText
        reverse={true}
        names={lessThen5KButAbove1kList2}
        className={"text-fill-purple"}
      />
      <ParallaxText
        names={lessThen5KButAbove1kList3}
        className={"text-fill-blue"}
      />
      <ParallaxText reverse={true} names={lessThen5KButAbove1kList4}  className={"text-fill-light-purple"} />
      <ParallaxText
        names={lessThen5KButAbove1kList5}
       
      />
    </section>
  );
};

export default Sponsors;
