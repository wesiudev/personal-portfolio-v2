import Link from "next/link";

export default function ProjectShowcase() {
  return (
    <>
      <motionDiv.div
        style={{ opacity: menuOpacity }}
        className={`duration-300 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[503]`}
      >
        <Link
          data-aos={aos}
          href="#"
          className="font-sans font-bold italic text-4xl bg-yellow-300 select-none"
        >
          Projects Showcase
        </Link>
      </motionDiv.div>
      <div className="h-[1000vh] w-screen relative mt-[700vh]">
        <div className="z-[502] sticky top-0 h-screen ">SIEMA</div>
      </div>
    </>
  );
}
