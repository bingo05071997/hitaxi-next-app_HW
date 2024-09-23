"use client";

import { useRouter } from "next/navigation";
import ArrowLeftIcon from "@/public/svg/arrow-left.svg";
import TaxiIcon from "@/public/img/favicon.png";
import SearchIcon from "@/public/svg/search-icon.svg";
import MoreCircleIcon from "@/public/svg/more-circle-icon.svg";
import Image from "next/image";

type Props = {
  title?: string;
  hasChildNode: boolean;
  searchEnable?: boolean;
  moreOptionEnable?: boolean;
  callEnable?: boolean;
};

export default function Navbar({
  title,
  hasChildNode,
  searchEnable,
  moreOptionEnable,
  callEnable,
}: Props): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex justify-between py-5 space-x-3 items-center">
      <div className="flex space-x-5 items-center">
        <button type="button" onClick={() => router.back()}>
          {hasChildNode ? (
            <ArrowLeftIcon className="h-6 w-6 cursor-pointer" />
          ) : (
            <Image
              src={TaxiIcon}
              alt="Taxi Icon"
              className="duration-500 ease-in-out cursor-pointer"
              width={32} // Adjust size as needed
              height={32}
              layout="intrinsic"
            />
          )}
        </button>
        <p className="font-urbanist font-bold text-xl">{title}</p>
      </div>
      <div className="flex items-center space-x-4">
        {callEnable ? (
          <button type="button" className="cursor-pointer">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.453 14.551C18.107 19.2036 19.1628 13.821 22.1259 16.7821C24.9827 19.6381 26.6246 20.2102 23.0051 23.8287C22.5518 24.193 19.6712 28.5765 9.54805 18.4561C-0.576376 8.3345 3.80453 5.45102 4.16898 4.99778C7.79719 1.36932 8.35952 3.02078 11.2163 5.87672C14.1794 8.83908 8.79912 9.89832 13.453 14.551Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        ) : (
          ""
        )}

        {searchEnable ? (
          <button type="button" className="cursor-pointer">
            <SearchIcon className="h-6 w-6" />
          </button>
        ) : (
          ""
        )}

        {moreOptionEnable ? (
          <button type="button" className="cursor-pointer">
            <MoreCircleIcon className="h-6 w-6" />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
