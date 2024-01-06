import Hero from "./components/hero";
import NavLeft from "./components/navLeft";
export default async function IndexPage() {
  return (
    <div className="relative h-[200vh]">
      <div className="h-[100vh] overflow-hidden">
        <Hero />
      </div>
      <NavLeft />
      <NavRight />
    </div>
  );
}
