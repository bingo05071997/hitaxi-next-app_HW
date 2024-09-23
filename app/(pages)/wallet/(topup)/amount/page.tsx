"use client";

import Navbar from "@/app/components/layout/navbar";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function TopUpWallet(): JSX.Element {
  const router = useRouter();
  const [topupAmount, setTopupAmount] = useState<number>(120);

  const rightAddNumber = (arg: number): void => {
    setTopupAmount(topupAmount*10+arg);
  };

  const leftDeleteNumber = (): void => {
    let amount = Math.floor(topupAmount/10) === 0 ? 0 : Math.floor(topupAmount/10);
    setTopupAmount(amount);
  }
  return (
    <div className="relative p-6 w-full flex flex-col flex-grow">
      <Navbar title="Top Up E-Wallet" hasChildNode={true} searchEnable={true} moreOptionEnable={true} />
      <div className="flex justify-center my-3">Enter the amount of top up</div>
      <div className="flex my-6 font-bold items-center justify-center text-4xl p-8 border-2 border-yellow-500 rounded-2xl">
        ${topupAmount}
      </div>
      <div className="flex flex-col flex-auto space-y-5">
        <div className="flex flex-row items-center space-x-3">
          <button
            className="basis-1/3 border-2 border-yellow-500 rounded-3xl p-2 hover:bg-gray-700"
            onClick={(): void => setTopupAmount(10)}
          >
            10
          </button>
          <button
            className="basis-1/3 border-2 border-yellow-500 rounded-3xl p-2 hover:bg-gray-700"
            onClick={(): void => setTopupAmount(20)}
          >
            20
          </button>
          <button
            className="basis-1/3 border-2 border-yellow-500 rounded-3xl p-2 hover:bg-gray-700"
            onClick={(): void => setTopupAmount(50)}
          >
            50
          </button>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <button
            className="basis-1/3 border-2 border-yellow-500 rounded-3xl p-2 hover:bg-gray-700"
            onClick={(): void => setTopupAmount(100)}
          >
            100
          </button>
          <button
            className="basis-1/3 border-2 border-yellow-500 rounded-3xl p-2 hover:bg-gray-700"
            onClick={(): void => setTopupAmount(200)}
          >
            200
          </button>
          <button
            className="basis-1/3 border-2 border-yellow-500 rounded-3xl p-2 hover:bg-gray-700"
            onClick={(): void => setTopupAmount(250)}
          >
            250
          </button>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <button
            className="basis-1/3 border-2 border-yellow-500 rounded-3xl p-2 hover:bg-gray-700"
            onClick={(): void => setTopupAmount(500)}
          >
            500
          </button>
          <button
            className="basis-1/3 border-2 border-yellow-500 rounded-3xl p-2 hover:bg-gray-700"
            onClick={(): void => setTopupAmount(750)}
          >
            750
          </button>
          <button
            className="basis-1/3 border-2 border-yellow-500 rounded-3xl p-2 hover:bg-gray-700"
            onClick={(): void => setTopupAmount(1000)}
          >
            1,000
          </button>
        </div>
      </div>
      <button className="primary-btn my-12"
      onClick={() => router.push('./method')}>Continue</button>
      <div className="flex flex-col bg-gray-800 rounded-2xl mb-5">
        <div className="flex flex-row items-center">
          <button
            className="basis-1/3 p-6 hover:bg-gray-700 text-xl rounded-tl-2xl"
            onClick={(): void => rightAddNumber(1)}
          >
            1
          </button>
          <button
            className="basis-1/3 p-6 hover:bg-gray-700 text-xl"
            onClick={(): void => rightAddNumber(2)}
          >
            2
          </button>
          <button
            className="basis-1/3 p-6 hover:bg-gray-700 text-xl rounded-tr-2xl"
            onClick={(): void => rightAddNumber(3)}
          >
            3
          </button>
        </div>
        <div className="flex flex-row items-center bg-gray-800 rounded-2xl">
          <button
            className="basis-1/3 p-6 hover:bg-gray-700 text-xl"
            onClick={(): void => rightAddNumber(4)}
          >
            4
          </button>
          <button
            className="basis-1/3 p-6 hover:bg-gray-700 text-xl"
            onClick={(): void => rightAddNumber(5)}
          >
            5
          </button>
          <button
            className="basis-1/3 p-6 hover:bg-gray-700 text-xl"
            onClick={(): void => rightAddNumber(6)}
          >
            6
          </button>
        </div>
        <div className="flex flex-row items-center">
          <button
            className="basis-1/3 p-6 hover:bg-gray-700 text-xl"
            onClick={(): void => rightAddNumber(7)}
          >
            7
          </button>
          <button
            className="basis-1/3 p-6 hover:bg-gray-700 text-xl"
            onClick={(): void => rightAddNumber(8)}
          >
            8
          </button>
          <button
            className="basis-1/3 p-6 hover:bg-gray-700 text-xl"
            onClick={(): void => rightAddNumber(9)}
          >
            9
          </button>
        </div>
        <div className="flex flex-row items-center bg-gray-800 rounded-2xl">
          <button
            className="basis-1/3 p-6 hover:bg-gray-700 text-xl rounded-bl-2xl">
            *
          </button>
          <button
            className="basis-1/3 p-6 hover:bg-gray-700 text-xl"
            onClick={(): void => rightAddNumber(0)}
          >
            0
          </button>
          <button
            className="basis-1/3 p-6 hover:bg-gray-700 text-xl flex justify-center items-center rounded-br-2xl"
            onClick={(): void => leftDeleteNumber()}
          >
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g >
                <path
                  d="M23.6665 7C23.9759 7 24.2727 7.12292 24.4915 7.34171C24.7102 7.5605 24.8332 7.85725 24.8332 8.16667V19.8333C24.8332 20.1428 24.7102 20.4395 24.4915 20.6583C24.2727 20.8771 23.9759 21 23.6665 21H10.8332L4.99983 15.1667C4.71285 14.8458 4.5542 14.4305 4.5542 14C4.5542 13.5695 4.71285 13.1542 4.99983 12.8333L10.8332 7H23.6665Z"
                  stroke="white"
                />
                <path
                  d="M18.9997 11.6665L14.333 16.3332M14.333 11.6665L18.9997 16.3332L14.333 11.6665Z"
                  stroke="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2983_4003">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0.333008)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
