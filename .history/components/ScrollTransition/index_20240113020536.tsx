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
    <div
      ref={mainWrapper}
      className="h-max flex w-screen relative mt-[525vh]"
    ></div>
  );
}
