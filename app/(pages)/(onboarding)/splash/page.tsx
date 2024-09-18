"use client";

import Image from "next/image";
import LoaderIcon from "@/public/svg/loader.svg";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/welcome");
    }, 3000);

    return () => clearTimeout(timer);
  },[router]);

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-10">
        <div className="flex mb-20">
          <Image src="/svg/taxi-logo.svg" alt="taxi-logo" width={200} height={300} layout="responsive" />
        </div>
        <div className="flex justify-center w-full">
            <LoaderIcon className="animate-spin" />
        </div>
    </div>
  );
}
