"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import HomeIcon from "@/public/svg/home-icon.svg";
import BookingIcon from "@/public/svg/document-icon.svg";
import InboxIcon from "@/public/svg/inbox-icon.svg";
import WalletIcon from "@/public/svg/wallet-icon.svg";
import ProfileIcon from "@/public/svg/profile-icon.svg";

import BoldBookingIcon from "@/public/svg/bold-booking-icon.svg";
import BoldHomeIcon from "@/public/svg/bold-home-icon.svg";
import BoldInboxIcon from "@/public/svg/bold-chat-icon.svg";
import BoldWalletIcon from "@/public/svg/bold-wallet-icon.svg";
import BoldProfileIcon from "@/public/svg/bold-profile-icon.svg";

type Props = {
  selectedButton: string;
};

export default function BottomBar({ selectedButton }: Props): JSX.Element {
  const router = useRouter();
  return (
    <div className="absolute bottom-0 items-center p-5 w-full right-1">
      <div className="flex flex-row mb-5 mt-5">
        <div className="flex basis-1/5 items-center justify-center p-2">
          <button
            type="button"
            className="cursor-pointer flex flex-col items-center"
          >
            {selectedButton === "home" ? (
              <div className="flex flex-col items-center justify-center gap-2">
                <BoldHomeIcon />
                <span className="text-[10px] text-yellow-400">Home</span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                <HomeIcon />
                <span className="text-[10px] text-gray-400">Home</span>
              </div>
            )}
          </button>
        </div>
        <div className="flex basis-1/5 items-center justify-center p-2">
          <button
            type="button"
            className="cursor-pointer flex flex-col items-center"
          >
            {selectedButton === "booking" ? (
              <div className="flex flex-col items-center justify-center gap-2">
                <BoldBookingIcon />
                <span className="text-[10px] text-yellow-400">Booking</span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                <BookingIcon />
                <span className="text-[10px] text-gray-400">Booking</span>
              </div>
            )}
          </button>
        </div>
        <div className="flex basis-1/5 items-center justify-center p-2">
          <button
            type="button"
            className="cursor-pointer flex flex-col items-center"
            onClick={() => {
              router.push("/call");
            }}
          >
            {selectedButton === "inbox" ? (
              <div className="flex flex-col items-center justify-center gap-2">
                <BoldInboxIcon />
                <span className="text-[10px] text-yellow-400">Inbox</span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                <InboxIcon />
                <span className="text-[10px] text-gray-400">Inbox</span>
              </div>
            )}
          </button>
        </div>
        <div className="flex basis-1/5 items-center justify-center p-2">
          <button
            type="button"
            className="cursor-pointer flex flex-col items-center justify-center"
            onClick={() => {
                router.push("/wallet");
              }}
          >
            {selectedButton === "wallet" ? (
              <div className="flex flex-col items-center justify-center gap-2">
                <BoldWalletIcon />
                <span className="text-[10px] text-yellow-400">Wallet</span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                <WalletIcon />
                <span className="text-[10px] text-gray-400">Wallet</span>
              </div>
            )}
          </button>
        </div>
        <div className="flex basis-1/5 items-center justify-center p-2">
          <button
            type="button"
            className="cursor-pointer flex flex-col items-center"
          >
            {selectedButton === "profile" ? (
              <div className="flex flex-col items-center justify-center gap-2">
                <BoldProfileIcon />
                <span className="text-[10px] text-yellow-400">Profile</span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                <ProfileIcon />
                <span className="text-[10px] text-gray-400">Profile</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
