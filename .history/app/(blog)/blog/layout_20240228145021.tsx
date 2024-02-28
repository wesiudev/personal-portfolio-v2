export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white overflow-hidden">
      <NavRight />
      <NavLeft />
      {children}
    </div>
  );
}
