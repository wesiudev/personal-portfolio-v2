"use client";
import AOS from "aos";
import { FaCode } from "react-icons/fa";
import StarsBg from "../../components/StarsBg";
import { useEffect } from "react";
import { RiComputerLine } from "react-icons/ri";
import { FaComputerMouse } from "react-icons/fa6";
import { LiaRocketSolid } from "react-icons/lia";
import Link from "next/link";
import Footer from "@/components/Footer";
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
      <Link
        href="/"
        className="fixed left-6 lg:left-12 top-12 z-[550] flex flex-row items-center justify-center"
      >
        <h2 className="italic font-bold text-2xl text-white drop-shadow-md shadow-black">
          wesiu.
          <span className=" text-yellow-500">dev</span>
        </h2>
      </Link>
      <div className="mt-60 pt-8 pb-12 flex flex-col items-center z-[600] relative w-max md:w-[675px] lg:w-[900px] mx-auto space-y-6">
        <div className="absolute left-[-42px] md:left-[50%] top-0 md:-translate-x-[50%] h-full w-1 bg-yellow-300 z-[600] rounded-full"></div>

        <div className="text-white font-bold text-2xl p-2 absolute -left-[20%] md:left-[50%] top-[0%] -translate-y-[138%] md:-translate-x-[50%] h-max w-max bg-slate-800 border-2 border-yellow-300 z-[600] rounded-xl px-12 font-anta">
          About me
        </div>

        {timeline.map((item: any, i: number) => (
          <RoadmapItem key={i} item={item} alignLeft={i % 2 === 0} />
        ))}
      </div>
      <div
        data-aos="fade-up"
        id="about"
        data-aos-duration={1200}
        className="w-screen flex flex-col z-[600] relative group"
      >
        <div className="z-[50] top-0 h-1 rounded-full w-full bg-transparent absolute left-[50%] -translate-x-[50%] group-hover:bg-yellow-300 scale-x-0 group-hover:scale-x-100 duration-[1000ms]"></div>
        <div className="bg-slate-800 p-3 py-12 relative">
          <RiComputerLine className="text-gray-300 w-[200px] h-[200px] z-[25] absolute right-24 top-[70%] lg:top-[60%] -translate-y-1/2 opacity-10 rotate-12" />
          <div className="md:w-[675px] lg:w-[900px] mx-auto text-white z-[50]">
            <h2 className="text-white drop-shadow-xl shadow-black text-3xl lg:text-4xl 2xl:text-5xl font-bold relative ml-24">
              <FaCode className="text-gray-300 w-[75px] h-[75px] z-[25] absolute -translate-x-[130%] opacity-10 top-1/2 -translate-y-1/2" />
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
            <div className="mt-24">
              <h2 className="text-white drop-shadow-xl shadow-black text-3xl lg:text-4xl 2xl:text-5xl font-bold relative ml-24">
                <FaComputerMouse className="text-gray-300 w-[75px] h-[75px] z-[25] absolute -translate-x-[130%] opacity-10 top-1/2 -translate-y-1/2" />
                <span className="text-yellow-300 font-anta">My Story</span>
              </h2>
              <p className="font-dosis text-base lg:text-xl mt-6">
                When I used to look at games or web applications, I often
                wondered, "How is this made? Is it difficult to achieve?" I
                always wanted to find the answers to these questions. While
                working at the warehouse, I had a desire to grow, so after work,
                I would fire up my development environment and tinker with code,
                exploring newer technologies and solutions. Fortunately, that
                curiosity still accompanies me today. Now, as I seek
                opportunities as a front-end developer, I continue to pursue my
                other passions alongside.
              </p>
            </div>
            <div className="mt-24">
              <h2 className="text-white drop-shadow-xl shadow-black text-3xl lg:text-4xl 2xl:text-5xl font-bold relative ml-24">
                <LiaRocketSolid className="text-gray-300 w-[75px] h-[75px] z-[25] absolute -translate-x-[130%] opacity-10 top-1/2 -translate-y-1/2" />
                <span className="text-yellow-300 font-anta">Future Plans</span>
              </h2>
              <ul className="mt-6">
                <li className="relative ml-4 mt-2">
                  <div className="absolute top-2 w-2 h-2 bg-white rounded-full left-0 -translate-x-[150%]"></div>
                  Learning to utilize different programming languages and
                  staying updated with technologies I use.
                </li>
                <li className="relative ml-4 mt-2">
                  <div className="absolute top-2 w-2 h-2 bg-white rounded-full left-0 -translate-x-[150%]"></div>
                  Exploring the field of game development.
                </li>
                <li className="relative ml-4 mt-2">
                  <div className="absolute top-2 w-2 h-2 bg-white rounded-full left-0 -translate-x-[150%]"></div>
                  Pursuing interests beyond programming, such as improving my
                  drawing skills and mastering communication in the Dutch
                  language.
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <Link
                target="_blank"
                href="/resume.pdf"
                className="text-white font-bold text-2xl p-2 h-max w-max bg-slate-800 hover:bg-slate-700 duration-300 border-2 border-yellow-300 z-[600] rounded-xl px-12"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
        <Footer />
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
    } relative duration-300`}
  >
    <div
      className={`absolute top-[50%] -translate-y-[50%] ${
        alignLeft
          ? "md:-right-[41px] md:left-auto -left-[42px]"
          : "-left-[41px]"
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
    <p className="p-3 text-sm sm:text-base">{item.description}</p>
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
