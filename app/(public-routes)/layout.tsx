import Navbar from "@/components/navbar";

export default function Routelayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}
