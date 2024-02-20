"use client";
import Link from "next/link";
import AOS from "aos";
import { FaCode } from "react-icons/fa";
import StarsBg from "../../components/StarsBg";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-br from-zinc-900 via-purple-900 to-zinc-900"></div>
      <StarsBg />

      <div className="mt-24 py-8 flex flex-col items-center z-[600] relative w-max md:w-[470px] lg:w-[980px] mx-auto space-y-6">
        <div className="absolute left-[-42px] md:left-[50%] top-0 md:-translate-x-[50%] h-full w-1 bg-yellow-300 z-[600] rounded-full"></div>
        {timeline.map((item: any, i: number) => (
          <RoadmapItem key={i} item={item} alignLeft={i % 2 === 0} />
        ))}
      </div>
      <div
        data-aos="fade-up"
        id="about"
        data-aos-duration={1200}
        className="w-screen flex flex-col items-center text-center z-[600] relative mt-24"
      >
        <h2 className="text-[#F7E11F] text-7xl text-center font-bold w-max mx-auto">
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
        </div>
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
    className={`text-white w-[300px] sm:w-[400px] md:w-[200px] lg:w-[448px] rounded-xl border-2 border-slate-900 bg-slate-800 ${
      alignLeft ? "md:mr-auto" : "md:ml-auto"
    } relative`}
  >
    <div
      className={`absolute top-[50%] -translate-y-[50%] ${
        alignLeft
          ? "md:-right-[42px] md:left-auto -left-[42px]"
          : "-left-[42px]"
      } h-1 w-10 bg-yellow-300`}
    ></div>
    <div
      className={`flex flex-row items-center justify-between ${
        alignLeft ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className={`bg-yellow-300 rounded-br-xl rounded-tl-xl px-3 py-1 w-max text-zinc-800 shadow-sm shadow-black ${
          alignLeft
            ? "md:rounded-bl-xl md:rounded-tr-xl md:rounded-br-none md:rounded-tl-none"
            : "rounded-br-xl rounded-tl-xl "
        }`}
      >
        {item.year}
      </div>
      <h2 className="px-3 py-1 font-bold">{item.title}</h2>
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
