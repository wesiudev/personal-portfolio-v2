"use client";
import * as Scroll from "react-scroll";
export default function NavRight() {
  const ScrollTo = Scroll.Link;
  return (
    <div className="fixed right-12 top-12 bottom-12 flex flex-col-reverse lg:flex-col items-center justify-center space-y-3">
      <ScrollTo
        to="tool"
        smooth={true}
        duration={500}
        delay={200}
        data-aos="fade-up"
        data-aos-delay={500}
        className="bg-white h-max aspect-square rounded-md overflow-hidden relative group cursor-pointer"
      ></ScrollTo>
    </div>
  );
}
