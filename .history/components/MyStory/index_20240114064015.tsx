import Link from "next/link";
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";

export default function MyStory() {
  return (
    <>
      <div
        id="about"
        className="w-screen flex flex-col items-center text-center z-[600] relative min-h-screen mt-[50vh]"
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
            >
              <FaGithub className="mr-2 h-7 w-7" />
              Portfolio source code
            </Link>
          </div>
        </div>
        <div className="text-white font-light text-xl italic h-screen flex flex-col items-center justify-center">
          <div className="h-max w-max group">
            <span className="opacity-50 group-hover:opacity-100 duration-200">
              wesiu.dev 2024
            </span>
            <div className="flex flex-row items-center w-full justify-evenly">
              <Link title="Send me an email" href="mailto:wesiudev@gmail.com">
                <FaEnvelope className="opacity-50 h-8 w-8 mt-4 hover:opacity-100 duration-200" />
              </Link>
              <Link title="Call me" href="tel:+48721417154">
                <FaPhone className="opacity-50 h-8 w-8 mt-4 hover:opacity-100 duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
