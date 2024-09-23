// Home.tsx

'use client';

import { useRouter } from 'next/navigation';
import FloatingHeader from '@/app/components/overlays/FloatingHeader';
import LocationFab from '@/app/components/overlays/LocationFab';
import SideNav from '@/app/components/navbars/SideNav';
import SlidingFab from '@/app/components/overlays/SlidingFab';

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="relative h-screen "
      // Add your image path here
    >
      {/* Main content */}
      <div className="flex flex-col items-center  justify-center space-y-4 h-full"></div>

      {/* Overlay components */}
      <FloatingHeader />

      <div className="ml-2 items-end flex gap-y-3 z-15 flex-col w-full fixed bottom-36">
        <LocationFab />
        <SlidingFab />
      </div>

      <SideNav />
    </div>
  );
}
