"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/app/components/layout/navbar";
import Image from "next/image";
import CreditCardIcon from "@/public/svg/credit-card.svg";
import BottomBar from "@/app/components/layout/bottombar";
import TransactionData from "@/app/data/walle-history.json";
import TransactionItem from "@/app/components/items/TransactionItem";

export default function Wallet(): JSX.Element {
  const router = useRouter();
  return (
    <div className="relative p-6 w-full flex flex-col flex-grow">
      <Navbar
        title="Wallet"
        hasChildNode={false}
        searchEnable={true}
        moreOptionEnable={true}
      />
      <div className="flex justify-center my-5">
        <div className="relative">
          <CreditCardIcon className="bg-gradient-to-r from-[#FEBB1B] to-[#FFC740] rounded-3xl" />
          <button
            className="absolute z-10 bottom-7 right-7"
            onClick={() => {
              router.push("wallet/amount");
            }}
          >
            <Image
              alt="topupbutton"
              src={"/img/topupicon.png"}
              width={118}
              height={38}
            />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <span className="font-bold">Transaction History</span>
        <span className="font-semibold text-yellow-400">See All</span>
      </div>
      {TransactionData.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          name={transaction.name}
          avatarUrl={transaction.avatarUrl}
          date={transaction.date}
          time={transaction.time}
          type={transaction.type}
          amount={transaction.amount}
        />
      ))}

      <div className="z-10">
        <BottomBar selectedButton="wallet" />
      </div>
    </div>
  );
}
