import Navbar from "@/components/navbar";

export default function Landinglayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full">
      <Navbar />
      {children}
    </div>
  );
}
