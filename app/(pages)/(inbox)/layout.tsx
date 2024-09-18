import Navbar from "@/app/components/navbar";
import HorizontalBar from "@/app/components/horizontalbar";
import BottomBar from "@/app/components/bottombar";

export default function InboxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="relative p-6 w-full flex flex-col flex-grow">
      <Navbar title="Inbox" hasChildNode={false} />
      <HorizontalBar />
      <div className="flex-grow w-full">
        {children}
      </div>
      <BottomBar />
    </div>
  );
}
