"use client";
import { NavLeft, NavRight } from "../components/Navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GraphicsPortfolio from "../components/GraphicsPortfolio";
import { motion, useScroll, useTransform } from "framer-motion";
import StarsBg from "../components/StarsBg";
export default async function IndexPage() {
  // Define the function to fetch the repositories
  const [repos, setRepos] = useState<any[]>([]);
  const fetchGithubRepos = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/wesiudev/repos?per_page=100"
      );
      const repos = await response.json();
      const nonForkedRepos = repos.filter((repo: any) => !repo.fork);
      return nonForkedRepos;
    } catch (error) {
      console.error("Error fetching repositories:", error);
      return [];
    }
  };
  // Extract the current year to filter commits made in 2023
  const currentYear = new Date().getFullYear();

  Promise.all(
    repos.map((repo) =>
      fetch(
        `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?since=2022-06-01T00:00:00Z`
      ).then((res) => res.json())
    )
  )
    .then((commitLists) => {
      // Flatten the array of commit arrays and count the total commits
      const totalCommits = commitLists.flat().length;
      console.log(`Total commits made in 2023: ${totalCommits}`);
    })
    .catch((error) => {
      console.error("Error fetching commit data:", error);
    });

  // Call the function to fetch the repositories and handle the data as needed
  useEffect(() => {
    fetchGithubRepos().then((repos) => {
      // Handle the fetched repositories here
      setRepos(repos);
      console.log(repos);
    });
  }, []);
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  const background = useTransform(scrollYProgress, (pos) =>
    pos >= 0.35 ? "rgb(12,12,12)" : ""
  );
  const opacity = useTransform(scrollYProgress, (pos) =>
    pos >= 0.35 ? "0" : "1"
  );
  return (
    <motion.div
      ref={mainWrapper}
      style={{ background }}
      className="relative duration-500"
    >
      <div className="fixed left-6 lg:left-12 top-12 z-[550] flex flex-row items-center justify-center">
        <h2 className="italic font-bold text-2xl text-white drop-shadow-md shadow-black">
          wesiu.
          <span className=" text-yellow-500">dev</span>
        </h2>
      </div>
      <div className="relative h-screen w-screen">
        <StarsBg />
        <motion.div
          style={{ opacity }}
          className="z-[0] duration-500 fixed left-0 top-0 bg-gradient-to-br from-blue-500 via-green-300 to-blue-500 background-animate delay-1000 h-full w-full"
        ></motion.div>
      </div>
      <NavLeft />
      <NavRight />
      <Suspense>
        <GraphicsPortfolio />
      </Suspense>
    </motion.div>
  );
}
