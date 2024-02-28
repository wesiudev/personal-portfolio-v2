import { NavLeft, NavRight } from "@/components/Navigation";
import "aos/dist/aos.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white overflow-hidden">
      <NavRight />
      <NavLeft />
      {children}
    </div>
  );
}
