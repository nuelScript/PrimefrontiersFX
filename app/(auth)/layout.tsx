export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-[#f5f7fe] min-h-screen">{children}</div>;
}
