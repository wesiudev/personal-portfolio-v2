"use client";
import AOS from "aos";
import { FaCode } from "react-icons/fa";
import StarsBg from "../../components/StarsBg";
import { useEffect } from "react";
import { RiComputerLine } from "react-icons/ri";
export default function Page() {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-br from-black via-zinc-800 to-black scale-150"></div>
      <StarsBg />

      <div className="mt-36 pt-8 pb-12 flex flex-col items-center z-[600] relative w-max md:w-[675px] lg:w-[900px] mx-auto space-y-6">
        <div className="absolute left-[-42px] md:left-[50%] top-0 md:-translate-x-[50%] h-full w-1 bg-yellow-300 z-[600] rounded-full"></div>

        <div className="text-white font-bold text-2xl p-2 absolute -left-[20%] md:left-[50%] top-[0%] -translate-y-[138%] md:-translate-x-[50%] h-max w-max bg-slate-800 border-2 border-yellow-300 z-[600] rounded-xl px-12 font-anta">
          About me
        </div>
        {/* <div className="text-white font-bold text-2xl p-2 absolute -left-[20%] md:left-[50%] bottom-[0%] translate-y-[98%] md:-translate-x-[50%] h-max w-max bg-slate-800 border-2 border-yellow-300 z-[600] rounded-xl px-12">
          Download Resume
        </div> */}
        {timeline.map((item: any, i: number) => (
          <RoadmapItem key={i} item={item} alignLeft={i % 2 === 0} />
        ))}
      </div>
      <div
        data-aos="fade-up"
        id="about"
        data-aos-duration={1200}
        className="w-screen flex flex-col z-[600] relative mt-24"
      >
        <div className="bg-slate-800 p-3 py-12 relative">
          <FaCode className="text-gray-300 w-[125px] h-[125px] xl:w-[200px] xl:h-[200px] z-[25] absolute left-6 xl:left-24 top-[30%] -translate-y-1/2 opacity-10" />
          <RiComputerLine className="text-gray-300 w-[200px] h-[200px] z-[25] absolute right-24 top-[60%] -translate-y-1/2 opacity-10 rotate-12" />
          <div className="md:w-[675px] lg:w-[900px] mx-auto text-white z-[50]">
            <h2 className="text-white drop-shadow-xl shadow-black text-3xl lg:text-4xl 2xl:text-5xl font-bold">
              <span className="text-yellow-300 font-anta">
                Motivation to code
              </span>
            </h2>
            <h3 className="font-anta drop-shadow-xl shadow-black text-xl lg:text-2xl xl:text-3xl font-bold mt-6">
              Logic
            </h3>
            <p className="font-dosis text-base lg:text-xl">
              {" "}
              I am captivated by the logic of applications and the optimization
              process. Designing and implementing new features excites me, and I
              am constantly driven to innovate.
            </p>
            <h3 className="font-anta drop-shadow-xl shadow-black text-xl lg:text-2xl xl:text-3xl font-bold mt-3">
              Learning
            </h3>
            <p className="font-dosis text-base lg:text-xl">
              My passion for programming fuels my desire for continuous growth,
              and I actively pursue opportunities to further develop my skills.
            </p>
            <h3 className="font-anta drop-shadow-xl shadow-black text-xl lg:text-2xl xl:text-3xl font-bold mt-3">
              Visualization
            </h3>
            <p className="font-dosis text-base lg:text-xl">
              I find immense satisfaction in working with data that I can
              visualize. Observing the flow of information between the
              components I create is a source of great fascination for me.
            </p>
          </div>
        </div>
        {/* <h2 className="text-[#F7E11F] text-7xl text-center font-bold w-max mx-auto">
          My Story
        </h2>
        <div className="text-[#F7E11F] text-lg md:text-2xl space-y-12 w-[80vw] md:w-[70vw] xl:w-[60vw] mt-16">
          <p className="">
            In 2015, I started studying computer science at a technical high
            school. At first, programming didn't really interest me, and I
            probably wouldn't have gotten into it if I passed final exams on the
            first attempt.
          </p>
          <p className="">
            While preparing for the exam retakes, I discovered a passion for
            programming.{" "}
          </p>
          <p className="">
            Wanting to learn more, I focused on PHP and created my first
            project, which had payment system. Of course it was a big failure.
          </p>
          <p className="">
            After passing the exams, I decided to explore coding further,
            concentrating on a JavaScript library - React.
          </p>
          <p className="">
            This led me to meet my{" "}
            <Link
              title="Visit page"
              target="_blank"
              href="https://sebster.dev"
              className="italic"
            >
              mentor
            </Link>
            , an experienced professional who not only reviewed my code but also
            presented me with exciting challenges that helped me improve.
          </p>
          <p className="">
            With new skills and a collection of projects, I made the choice to
            look for a job in my chosen field.
          </p>
          <div className="w-full flex items-center text-center">
            <Link
              href="https://github.com/wesiudev/personal-portfolio-v2"
              className="flex flex-row items-center mx-auto w-max"
              title={`Source code of portfolio`}
              target="_blank"
            >
              <FaCode className="mr-2 h-7 w-7" />
              Portfolio source code
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
}
const RoadmapItem = ({
  item,
  alignLeft,
}: {
  item: any;
  alignLeft: boolean;
}) => (
  <div
    className={`text-white w-[250px] sm:w-[400px] md:w-[300px] lg:w-[410px] rounded-xl border-2 border-slate-900 bg-slate-800 ${
      alignLeft
        ? "md:mr-auto md:rounded-tr-none"
        : "md:ml-auto md:rounded-tl-none"
    } relative hover:border-yellow-300 duration-300`}
  >
    <div
      className={`absolute top-[50%] -translate-y-[50%] ${
        alignLeft
          ? "md:-right-[42px] md:left-auto -left-[42px]"
          : "-left-[42px]"
      } h-1 w-10 bg-yellow-300`}
    ></div>
    <div
      className={`flex flex-col items-start md:items-center justify-between ${
        alignLeft ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className={`font-anta bg-yellow-300 rounded-br-lg rounded-tl-lg px-3 py-1 w-max text-zinc-800 ${
          alignLeft
            ? "md:rounded-bl-lg md:rounded-br-none md:rounded-tl-none"
            : "rounded-br-lg md:rounded-l-none"
        }`}
      >
        {item.year}
      </div>
      <h2 className="px-3 font-bold md:text-xl font-anta mt-3 md:mt-0">
        {item.title}
      </h2>
    </div>
    <p className="p-3">{item.description}</p>
  </div>
);

const timeline = [
  {
    year: 2015,
    title: "IT school",
    description: "Began studying computer science at a technical high school",
  },
  {
    year: 2017,
    title: "First Website",
    description:
      "In 2017 I created my first primitive website using HTML, CSS and JavaScript",
  },
  {
    year: 2020,
    title: "Focus on PHP",
    description:
      "After passing my exams, I Focused on PHP and created my first project, which included a payment system.",
  },
  {
    year: 2021,
    title: "Discovery of React",
    description:
      "I decided to explore coding further, concentrating on a JavaScript library - React.",
  },
  {
    year: 2022,
    title: "Encounter with Mentor",
    description:
      "Met my mentor, an experienced professional who reviewed my code and presented exciting challenges.",
  },
  {
    year: 2023,
    title: "Creating projects",
    description:
      "This year was a big step forward. I've learned a lot and created a collection of projects.",
  },
];
