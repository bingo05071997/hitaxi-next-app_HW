import Navbar from "@/app/components/layout/navbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="relative p-6 w-full flex flex-col flex-grow items-start justify-start">
      <Navbar hasChildNode={true}/>
      <div className="flex-grow w-full">
        {children}
      </div>
    </div>
  );
}
