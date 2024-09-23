// components/WalletItem.js
import Image from "next/image";
import WalletIcon from "@/public/svg/black-wallet-icon.svg";

type Props = {
  name: string;
  avatarUrl: string;
  date?: string;
  time?: string;
  amount?: number;
  type?: string;
};

export default function TransactionItem({
  name,
  date,
  time,
  amount,
  type,
  avatarUrl,
}: Props): JSX.Element {
  return (
    <button className="flex items-center justify-between w-full py-4 cursor-pointer hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
      <div className="flex items-center space-x-4">
      {type === "taxi" ? <Image
          src={avatarUrl}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        /> : 
        <div className="flex outline outline-offset-0 outline-8 mx-1 outline-[#ffc64050] bg-yellow-400 rounded-full w-10 h-10 justify-center items-center"><WalletIcon className="text-black"/></div>
        }
        <div className="flex flex-col">
          <div className="font-bold text-left">{name}</div>
          <div className="inline-block text-gray-400 text-left">
            {date} | {time}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="font-semibold">${amount}</div>
        <div className="inline-block align-middle">
          <span className="mr-2 inline-block text-gray-400">{type}</span>
          <img
            src={`${type === "taxi" ? "/svg/up-square-icon-red.svg" : ""}
                  ${type === "topup" ? "/svg/down-square-icon.svg" : ""}
                `}
            alt="Call Icon"
            width={16}
            height={16}
            className="stroke-yellow-400 inline-block"
          />
        </div>
      </div>
    </button>
  );
}
