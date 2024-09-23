"use client";

import Navbar from "@/app/components/layout/navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TransactionData from "@/app/data/walle-history.json";
import TransactionItem from "@/app/components/items/TransactionItem";

export default function TransactionHistory(): JSX.Element {
  const router = useRouter();
  return (
    <div className="relative p-6 w-full flex flex-col flex-grow">
      <Navbar
        title="Transaction History"
        hasChildNode={true}
        searchEnable={true}
      />
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
    </div>
  );
}
