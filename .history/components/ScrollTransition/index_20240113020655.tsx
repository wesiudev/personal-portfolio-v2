import React, { useRef } from "react";

import { useScroll, useTransform } from "framer-motion";
export default function ScrollTransition() {
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  const position = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["sticky", "relative"]
  );
  return (
    <div ref={mainWrapper} className="flex w-screen relative h-[200vh]">
      <div className="sticky left-0 top-0 h-screen w-screen bg-red-500">
        siema
      </div>
    </div>
  );
}
