import { createRef, RefObject, useEffect, useState } from "react";
import throttle from "lodash.throttle";

// /**
//  * Check if an element is in viewport

//  * @param {number} offset - Number of pixels up to the observable element from the top
//  * @param {number} throttleMilliseconds - Throttle observable listener, in ms
//  */
export default function useVisibility<Element extends HTMLElement>(
  offset = 0,
  throttleMilliseconds = 100
): [Boolean, RefObject<Element>] {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = createRef<Element>();

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const windowsHeight = window.innerHeight;
    const bounding = currentElement.current.getBoundingClientRect();
    const top = bounding.top;
    const bottom = bounding.bottom;
    console.log({ windowsHeight, top, bottom });
    if (windowsHeight >= top && windowsHeight <= bottom) {
      if (!isVisible) {
        setIsVisible(true);
      }
    }
    // if (!isVisible)
    //   setIsVisible(
    //     () => top + offset >= 0 && top - offset <= window.innerHeight
    //   );

    // console.log("bottom", bottom);
    // console.log("k", top - offset, window.innerHeight);
  }, throttleMilliseconds);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return [isVisible, currentElement];
}
