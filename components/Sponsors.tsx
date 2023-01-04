import React from "react";
import { HorizontalTicker } from "react-infinite-ticker";

import {
  above5k,
  lessThen5KButAbove1k,
  lessThen5KButAbove1kList2,
} from "@/data/sponsorsData";

interface ParallaxProps {
  children?: string;
  baseVelocity: number;
  names: string[];
}

// function ParallaxText({ children, baseVelocity = 100, names }: ParallaxProps) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   /**
//    * This is a magic wrapping for the length of the text - you
//    * have to replace for wrapping that works for you or dynamically
//    * calculate
//    */
//   const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`);

//   const directionFactor = useRef<number>(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//     /**
//      * This is what changes the direction of the scroll once we
//      * switch scrolling directions.
//      */
//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();
//     baseX.set(baseX.get() + moveBy);
//   });

//   /**
//    * The number of times to repeat the child text should be dynamically calculated
//    * based on the size of the text and viewport. Likewise, the x motion value is
//    * currently wrapped between -20 and -45% - this 25% is derived from the fact
//    * we have four children (100% / 4). This would also want deriving from the
//    * dynamically generated number of children.
//    */
//   return (
//     <div className="parallax">
//       <motion.div className="scroller" style={{ x }}>
//         {React.Children.toArray(
//           arrayFiller({ arr: names, arrLen: 60 }).map((name: string) => (
//             <span>{name}</span>
//           ))
//         )}
//       </motion.div>
//     </div>
//   );
// }

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
      <h2 className="section-title fv-h1">Our Sponsor&apos;s</h2>

      <ParallaxText names={above5k} />
      <ParallaxText
        names={lessThen5KButAbove1k}
        reverse={true}
        className={"text-fill-light-purple"}
      />
      <ParallaxText
        names={lessThen5KButAbove1kList2}
        className={"text-fill-navy-blue"}
      />
    </section>
  );
};

export default Sponsors;
