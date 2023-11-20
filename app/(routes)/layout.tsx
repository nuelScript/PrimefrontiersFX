import Navbar from "@/components/navbar";

export default function Routelayout({
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
