// @ts-nocheck
import * as React from "react";

import PreLoader from "@/components/PreLoader";
import NextHeader from "@/components/NextHeader";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

import { useOnScroll } from "@/hooks/useOnScroll";

export default function Home() {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const box = React.useRef(null);
  const img = React.useRef(null);
  const [ΔY, setΔY] = React.useState(0);

  const clamp = false,
    speed = -10;

  useOnScroll((scrollY, winHeight) => {
    if (!box.current) return;
    if (!img.current) return;
    // if (!boxInitialized.current || !box.current || !boxRect.current) return;
    // if (!imgInitialized.current || !img.current || !imgRect.current) return;

    const boxRect = box.current.getBoundingClientRect();

    const winBottom = scrollY + winHeight;
    const boxTop = boxRect.top + scrollY;
    const boxBottom = boxRect.bottom + scrollY;
    const boxHeight = boxRect.height;
    const pct =
      (clampVal(winBottom, boxTop, boxBottom + winHeight) - boxTop) /
      (boxHeight + winHeight);

    const imgHeight = img.current.offsetHeight;
    // const imgTop = img.current.getBoundingClientRect().y;
    // const imgHeight = img.current.innerHeight;
    // const imgBottom = imgTop + imgHeight;

    if (imgHeight < boxHeight) {
      console.warn(
        `parallax effect doesn't work if image is smaller than the bounding box. imgHeight=${imgHeight} boxHeight=${boxHeight}`
      );
      return;
    }

    // calculate the distance that the image needs to traverse
    // speed: 2  >> start: -diff*2 end: diff
    // speed: 1  >> start: -diff   end: 0
    // speed: 0  >> start: -diff/2 end: -diff/2   <-- image is centered
    // speed: -1 >> start: 0       end: -diff
    // speed: -2 >> start: diff    end: -diff*2
    const diff = imgHeight - boxHeight;
    const deltaY =
      // starting offset
      (0 - diff - diff * speed) * 0.5 +
      // distance travelled to reach end
      diff * pct * speed;

    if (clamp) {
      setΔY(clampVal(deltaY, -diff, 0));
    } else {
      setΔY(deltaY);
    }
  });

  return (
    <>
      <NextHeader />
      <PreLoader />
      <Hero offsetY={offsetY} />
      <main style={{ position: "relative" }} ref={box}>
        <div
          ref={img}
          className="icon"
          style={{
            transform: `translate(0, ${ΔY * 100}px)`,
          }}
        ></div>
        <Events offsetY={offsetY} />
        <Sponsors />
        <Footer />
      </main>
    </>
  );
}

const clampVal = (num = 0, min = 0, max = 0) => {
  return Math.max(min, Math.min(num, max));
};
