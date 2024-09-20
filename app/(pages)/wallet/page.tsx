"use clinet";

import Navbar from "@/app/components/layout/navbar";
import Image from "next/image";
import CreditCardIcon from "@/public/svg/credit-card.svg";
import BottomBar from "@/app/components/layout/bottombar";

export default function Wallet(): JSX.Element {
  return (
    <div className="relative p-6 w-full flex flex-col flex-grow">
      <Navbar title="Wallet" hasChildNode={false} />
      <div className="flex justify-center my-5">
        <div className="relative">
            <CreditCardIcon className="bg-gradient-to-r from-[#FEBB1B] to-[#FFC740]  rounded-3xl"/>
            <button className="absolute z-10 bottom-7 right-7">
                <Image 
                    alt="topupbutton"
                    src={"/img/topupicon.png"}
                    width={118}
                    height={38}/>
            </button>
        </div>
      </div>
      <BottomBar selectedButton="wallet"/>
    </div>
  );
}
