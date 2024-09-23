import Navbar from '@/app/components/navbar';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div
      style={{ backgroundImage: 'url("/img/bck_home.png")' }}
      className="bg-center bg-cover bg-no-repeat max-w-screen-sm flex-grow flex flex-col w-full"
    >
      {' '}
      <div className="flex-grow w-full">{children}</div>
    </div>
  );
}
