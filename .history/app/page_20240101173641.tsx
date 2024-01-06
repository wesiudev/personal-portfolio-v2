import Hero from "./components/hero";
import NavLeft from "./components/navLeft";
export default async function IndexPage() {
  return (
    <div className="relative">
      <div className="fixed left-0 top-0">
        <Hero />
      </div>
      <NavLeft />
    </div>
  );
}
