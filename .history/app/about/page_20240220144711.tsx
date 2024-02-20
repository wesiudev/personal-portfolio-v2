import Link from "next/link";
import { FaCode, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <div
        id="about"
        className="w-screen flex flex-col items-center text-center z-[600] relative min-h-screen"
      >
        <h2 className="text-[#F7E11F] text-7xl text-center font-bold w-max mx-auto">
          My Story
        </h2>
        <div className="text-[#F7E11F] text-lg lg:text-2xl space-y-12 w-[80vw] lg:w-[70vw] xl:w-[60vw] mt-16">
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
