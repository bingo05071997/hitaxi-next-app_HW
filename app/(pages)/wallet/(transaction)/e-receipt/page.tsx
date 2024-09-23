"use client";

import Barcode from "react-barcode";
import Navbar from "@/app/components/layout/navbar";
import ReceiptOption from "@/app/components/menu/receiptoption";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ReceiptData from "@/app/data/e-receipt.json";
import StarIcon from "@/public/svg/star-icon.svg";
import CopyIcon from "@/public/svg/copy-icon.svg";
import ArrowLeftIcon from "@/public/svg/arrow-left.svg";
import TaxiIcon from "@/public/img/favicon.png";
import SearchIcon from "@/public/svg/search-icon.svg";
import MoreCircleIcon from "@/public/svg/more-circle-icon.svg";

export default function Receipt(): JSX.Element {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const receipt = ReceiptData.find((receipt) => receipt.id === 1);
  if (!receipt) {
    return <div>Chat not found</div>;
  }
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // format number to US dollar
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="relative p-6 w-full flex flex-col flex-grow flex-auto justify-between">
      <div className="flex-col">
        <div className="flex justify-between py-5 space-x-3 items-center">
          <div className="flex space-x-5 items-center">
            <button type="button" onClick={() => router.back()}>
              <ArrowLeftIcon className="h-6 w-6 cursor-pointer" />
            </button>
            <p className="font-urbanist font-bold text-xl">E-Receipt</p>
          </div>
          <div className="flex items-center space-x-4">
            <button type="button" className="cursor-pointer" onClick={toggleDropdown}>
              <MoreCircleIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isDropdownOpen && <ReceiptOption />}
      </div>
      <div className="flex flex-row justify-center items-center">
        {receipt.receipts.map((receipt, index) => {
          return (
            <Barcode
              key={index}
              value={receipt.code}
              lineColor="white"
              fontSize={12}
              background="transparent"
            />
          );
        })}
      </div>
      <div className="flex flex-row justify-between items-center p-6 bg-[#1F222A] rounded-2xl mt-5 space-x-4">
        <div className="flex flex-row">
          <img
            src={receipt.avatarUrl}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col items-start justify-center px-5">
            <div className="flex text-lg text-left">{receipt.name}</div>
            <div className="flex text-[#E0E0E0] text-sm text-left">
              {receipt.car}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <div className="flex text-[14px] items-center">
            <StarIcon />
            {receipt.starRate}
          </div>
          <div className="flex text-[#E0E0E0] text-sm">{receipt.carNumber}</div>
        </div>
      </div>
      <div className="flex flex-col p-6 bg-[#1F222A] rounded-2xl mt-5 ">
        <div className="flex flex-row justify-between items-center pb-5">
          <div className="text-[14px] text-left">Amount</div>
          <div className="text-[14px] text-left">
            {USDollar.format(receipt.amount)}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center pb-5">
          <div className="text-[14px] text-left text-[#FEC949]">Promo</div>
          <div className="text-[14px] text-left text-[#FEC949]">
            -{USDollar.format(receipt.promo)}
          </div>
        </div>
        <hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 mb-5" />
        <div className="flex flex-row justify-between items-cente">
          <div className="text-[14px] text-left">Total</div>
          <div className="text-[14px] text-left">
            {USDollar.format(receipt.total)}
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 bg-[#1F222A] rounded-2xl mt-5 text-[#E0E0E0] text-[14px] text-left">
        <div className="flex flex-row justify-between items-center pb-5">
          <div>Payment Methods</div>
          <div>{receipt.paymentMethod}</div>
        </div>
        <div className="flex flex-row justify-between items-center pb-5 ">
          <div>Date</div>
          <div>{receipt.date}</div>
        </div>
        <div className="flex flex-row justify-between items-center pb-5 ">
          <div>Transaction ID</div>
          <div className="flex flex-row">
            {receipt.transactionId}
            <CopyIcon />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center pb-5">
          <div>Status</div>
          <div className="text-[10px] p-[6px] bg-[#FEBB1B] rounded-md">
            <div className="text-black">{receipt.status}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 bg-[#1F222A] rounded-2xl mt-5 text-[#E0E0E0] text-[14px]">
        <div className="flex flex-row justify-between items-center ">
          <div className="text-[14px] text-left">Category</div>
          <Menu>
            <div className="flex flew-row">
              <MenuButton>Expense </MenuButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <MenuItems
              anchor="bottom"
              transition
              className="origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <a
                  className="block data-[focus]:bg-blue-100 text-[14px]"
                  href="/settings"
                >
                  Settings
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}
