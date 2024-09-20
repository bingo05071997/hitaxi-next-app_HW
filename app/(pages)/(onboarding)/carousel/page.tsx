"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type SlideData = {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export default function Carousel(): JSX.Element {
  const slides: SlideData[] = [
    { id: 1, src: "/svg/carousel-slide1.svg", alt: "Slide 1", caption: "We provide professional taxi services for you" },
    { id: 2, src: "/svg/carousel-slide2.svg", alt: "Slide 2", caption: "Your satisfaction is our number one priority" },
    { id: 3, src: "/svg/carousel-slide3.svg", alt: "Slide 3", caption: "Let's make your day great with HiTaxi right now!" },
  ];

  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const getStarted = (): void => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col h-screen justify-center py-6 sm:py-12 px-6 sm:px-12 space-y-8 sm:space-y-14"> 
      <div className="flex-grow flex flex-col justify-center items-center duration-500 ease-in-out cursor-pointer space-y-8 sm:space-y-16">
        <div className="flex justify-center max-w-60">
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="duration-500 ease-in-out cursor-pointer"
            width={300}
            height={249}
            layout="intrinsic"
          />
        </div>
        <h1 className="text-center text-[40px] font-urbanist">{slides[currentSlide].caption}</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        {
          currentSlide < slides.length -1 ? (
            <button className="primary-btn" onClick={nextSlide}>Next</button>
          ) : (
            <button className="primary-btn" onClick={getStarted}>Get Started</button>
          )
        }
      </div>
    </div>
  );
}
