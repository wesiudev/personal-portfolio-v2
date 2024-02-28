import { NavLeft, NavRight } from "@/components/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-white overflow-hidden">{children}</div>;
}
