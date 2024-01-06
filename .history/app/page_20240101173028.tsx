import { HomeTitle } from "./components/HomeTitle";
import TextSwitcher from "./components/TextSwitcher";
import { Parallax } from "react-parallax";
import Hero from "./components/hero";
import NavLeft from "./components/navLeft";
export default async function IndexPage() {
  return (
    <>
      <Hero />
      <NavLeft />
    </>
  );
}
