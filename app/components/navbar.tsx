"use client";

import { useRouter } from "next/navigation";
import ArrowLeftIcon from "@/public/svg/arrow-left.svg";
import TaxiIcon from "@/public/img/favicon.png";
import SearchIcon from "@/public/svg/search-icon.svg";
import MoreCircleIcon from "@/public/svg/more-circle-icon.svg";
import Image from "next/image";

type Props = {
  title?: string;
  hasChildNode?: boolean
};

export default function Navbar({
  title, hasChildNode
}: Props): JSX.Element {
    const router = useRouter();

    return (
        <div className="flex justify-between py-3 space-x-3 items-center">
          <div className="flex space-x-3 items-center">
            <button type="button" onClick={() => router.back()}>
              {hasChildNode ? (
                <ArrowLeftIcon className="h-6 w-6 cursor-pointer" />
              ) : (
                <Image
                  src={TaxiIcon}
                  alt="Taxi Icon"
                  className="duration-500 ease-in-out cursor-pointer"
                  width={32}  // Adjust size as needed
                  height={32}
                  layout="intrinsic"
                />
              )}
              </button>
              <p className="font-urbanist font-bold text-xl">{title}</p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button type="button" className="cursor-pointer">
              <SearchIcon className="h-6 w-6" />
            </button>

            {/* More Icon */}
            <button type="button" className="cursor-pointer">
              <MoreCircleIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
    );
}
