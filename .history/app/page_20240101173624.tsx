import Hero from "./components/hero";
import NavLeft from "./components/navLeft";
export default async function IndexPage() {
  return (
    <div className="relative">
      <Hero />
      <NavLeft />
    </div>
  );
}
