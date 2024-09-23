export default function InboxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="relative p-6 w-full flex flex-col flex-grow">
        {children}
    </div>
  );
}
