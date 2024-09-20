<<<<<<< HEAD
=======
import Navbar from "@/app/components/navbar";
import HorizontalBar from "@/app/components/horizontalbar";
import BottomBar from "@/app/components/bottombar";

>>>>>>> 3b5e1e189295e6a16704352ba2e641ab79c42871
export default function InboxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="relative p-6 w-full flex flex-col flex-grow">
<<<<<<< HEAD
        {children}
=======
      <Navbar title="Inbox" hasChildNode={false} />
      <HorizontalBar />
      <div className="flex-grow w-full">
        {children}
      </div>
      <BottomBar />
>>>>>>> 3b5e1e189295e6a16704352ba2e641ab79c42871
    </div>
  );
}
