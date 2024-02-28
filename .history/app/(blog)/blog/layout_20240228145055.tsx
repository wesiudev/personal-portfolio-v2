import { NavLeft, NavRight } from "@/components/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative z-[1000]">
        <NavRight />
        <NavLeft />
      </div>
      {children}
    </div>
  );
}
