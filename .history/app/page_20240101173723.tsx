import Hero from "./components/hero";
import NavLeft from "./components/navLeft";
export default async function IndexPage() {
  return (
    <div className="relative h-[200vh]">
      <div className="fixed left-0 top-0 h-max w-max z-50">
        <Hero />
      </div>
      <NavLeft />
    </div>
  );
}
