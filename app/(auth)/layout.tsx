export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#f5f7fe] h-full flex items-center justify-center">
      {children}
    </div>
  );
}
