import DashboardNavbar from "@/components/dashboard-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center ">
      <DashboardNavbar />
      {children}
    </div>
  );
}
