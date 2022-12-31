import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

import { above5k, lessThen5KButAbove1k } from "@/data/sponsorsData";

interface ParallaxProps {
  children?: string;
  baseVelocity: number;
  names: string[];
}

function ParallaxText({ children, baseVelocity = 100, names }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -55, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {React.Children.toArray(
          names.map((name: string) => <span>{name}</span>)
        )}
      </motion.div>
    </div>
  );
}

const Sponsors = () => {
  return (
    <section className="pb-12">
      <ParallaxText baseVelocity={-1} names={above5k} />
      <ParallaxText baseVelocity={1} names={lessThen5KButAbove1k} />
    </section>
    // <div
    //   className="styles_line "
    //   // style={{ display: "flex", overflow: "hidden" }}
    // >
    //   {React.Children.toArray(
    //     [
    //       "test",
    //       "test2",
    //       "test",
    //       "test2",
    //       "test",
    //       "test2",
    //       "test",
    //       "test2",
    //       "test",
    //       "test2",
    //       "test",
    //       "test2",
    //     ].map((d) => (
    //       <span className="fv-h3">
    //         {/* <span className="card" style={{ width: "400px" }}> */}
    //         {d}
    //         {/* </span> */}
    //       </span>
    //     ))
    //   )}
    // </div>
    // <motion.div
    //   initial={{ x: "-52%" }}
    //   animate={{ x: "0%" }}
    //   transition={{ ease: "easeInOut", duration: 0.3 }}
    // ></motion.div>
    // <div className="section-reviews__bottom">
    //   <div className="section-reviews__bottom-wrapper review-card__anim1">
    //     {[].map((review: any) => (
    //       <div key={review.id} className="review-card">
    //         <div className="review-card__top">
    //           <div className="review-card__top--left">
    //             <p className="review-card__p">{review.name}</p>
    //             <h3 className="review-card__h3">{review.userName}</h3>
    //           </div>
    //           <div className="review-card__top--right">
    //             <img src="svg/twitter.svg" alt="twitter icon" />
    //           </div>
    //         </div>
    //         <div className="review-card__bottom">
    //           <h2 className="review-card__h2">{review.reply}</h2>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Sponsors;
