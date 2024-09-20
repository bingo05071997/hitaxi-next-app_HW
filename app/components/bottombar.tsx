"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import HomeIcon from "@/public/svg/home-icon.svg";
import BookingIcon from "@/public/svg/document-icon.svg";
import InboxIcon from "@/public/svg/bold-chat-icon.svg";
import WalletIcon from "@/public/svg/wallet-icon.svg";
import ProfileIcon from "@/public/svg/profile-icon.svg";

export default function BottomBar() : JSX.Element {
    const router = useRouter();
    return (
        <div className="bottom-0 items-center p-5">
            <div className="flex flex-row mb-5 mt-5">
                <div className="flex basis-1/5 items-center justify-center p-2">
                    <button type="button" className="cursor-pointer flex flex-col items-center">
                        <HomeIcon />
                        <span className="text-[10px] text-gray-400">Home</span>
                    </button>
                </div>
                <div className="flex basis-1/5 items-center justify-center p-2">
                    <button type="button" className="cursor-pointer flex flex-col items-center">
                        <BookingIcon />
                        <span className="text-[10px] text-gray-400">Bookings</span>
                    </button>
                </div>
                <div className="flex basis-1/5 items-center justify-center p-2">
                    <button type="button" className="cursor-pointer flex flex-col items-center">
                        <InboxIcon />
                        <span className="text-[10px] text-yellow-400">Inbox</span>
                    </button>
                </div>
                <div className="flex basis-1/5 items-center justify-center p-2">
                    <button type="button" className="cursor-pointer flex flex-col items-center">
                        <WalletIcon />
                        <span className="text-[10px] text-gray-400">Wallet</span>
                    </button>
                </div>
                <div className="flex basis-1/5 items-center justify-center p-2">
                    <button type="button" className="cursor-pointer flex flex-col items-center">
                        <ProfileIcon />
                        <span className="text-[10px] text-gray-400">Profile</span>
                    </button>
                </div>
            </div>
        </div>
    );
}