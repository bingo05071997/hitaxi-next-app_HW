"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/app/components/layout/navbar";
import CardChoiceItem from "@/app/components/items/CardChoiceItem";

type CardData = {
  nameId: string;
  name: string;
  avatarUrl: string;
};

export default function TopUpWalletMethod(): JSX.Element {
  const cards: CardData[] = [
    { nameId: "paypal", name: "PayPal", avatarUrl: "/svg/paypal.svg" },
    {
      nameId: "googlepay",
      name: "Google Pay",
      avatarUrl: "/svg/googlepay.svg",
    },
    { nameId: "applepay", name: "Apple Pay", avatarUrl: "/svg/applepay.svg" },
    {
      nameId: "masterpay",
      name: "..........4679",
      avatarUrl: "/svg/masterpay.svg",
    },
  ];
  const router = useRouter();
  return (
    <div className="relative p-6 w-full flex flex-col flex-grow flex-auto justify-between">
      <Navbar title="Top Up E-Wallet" hasChildNode={true} searchEnable={true} moreOptionEnable={true} />
      <div className="my-3">Select the top up method you want to use.</div>
      <div className="flex">
        <div className="w-full">
          {cards.map((card, index) => {
            return (
              <CardChoiceItem
                key={index}
                nameId={card.nameId}
                name={card.name}
                avatarUrl={card.avatarUrl}
              />
            );
          })}
        </div>
      </div>
      <button className="flex bg-[#35383F] hover:bg-gray-700 rounded-full text-white py-4 px-8 justify-center  text-center w-full shadow-primary my-6">
        Add New Card
      </button>
      <div className="flex rounded-2xl py-5 border-t-[1px] border-gray-500">
        <button
          className="primary-btn my-10"
          onClick={() => router.push("./enterpin")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
