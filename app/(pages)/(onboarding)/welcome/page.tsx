"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Welcome() {
    const router = useRouter();
    
    const handleClick = () => {
        router.push('/carousel');
    }

    return (
        <div className="relative flex flex-col w-full items-center flex-grow justify-center" onClick={handleClick}>
            <div className="w-full">
                <Image 
                    src="/img/bck1.png" 
                    alt="background" 
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="absolute h-1/2 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-[#2C2C2C]" />
            <div className="absolute bottom-10 flex flex-col space-y-6 justify-center w-full p-5">
                <p className="text-4xl font-bold text-white">Welcome to 👋</p>
                <h1 className="text-8xl font-bold font-urbanist text-yellow-500">HiTaxi</h1>
                <p className="text-xl font-semibold text-white">Your friendly and reliable daily taxi service for seamless, safe, and affordable rides.</p>
            </div>
        </div>
    );
}
