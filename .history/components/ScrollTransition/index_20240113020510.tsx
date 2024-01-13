import Link from "next/link";
import React, { useRef } from "react";

import { useScroll, useTransform, motion as motionDiv } from "framer-motion";
export default function ScrollTransition() {
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  return <div></div>;
}
