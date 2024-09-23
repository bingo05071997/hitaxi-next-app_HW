"use client";

import Navbar from "@/app/components/layout/navbar";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Modal from "@/app/components/modals/topupmodal";
import LoaderIcon from "@/public/svg/loader.svg";

export default function TopUpWallet(): JSX.Element {
  const [pin, setPin] = useState<string[]>(["", "", "", ""]);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [fieldName, fieldIndex] = name.split("-");
    let fieldIntIndex = parseInt(fieldIndex);

    const newPin = [...pin];
    newPin[fieldIntIndex - 1] = value;
    setPin(newPin);

    // Check if no of char in field == maxlength
    if (value.length >= 1) {
      // It should not be last input field
      if (fieldIntIndex < 4) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(
          `input[name=digit-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null && nextfield instanceof HTMLInputElement) {
          nextfield.focus();
        }
      }
    }
  };
  // Function to handle number button clicks
  const enterNumber = (number: number) => {
    const emptyIndex = pin.findIndex((val) => val === "");
    if (emptyIndex !== -1) {
      const newPin = [...pin];
      newPin[emptyIndex] = number.toString(); // Add the clicked number to the first empty input
      setPin(newPin);

      // Move to the next input field
      const nextfield = document.querySelector(
        `input[name=digit-${emptyIndex + 2}]`
      );
      if (nextfield !== null && nextfield instanceof HTMLInputElement) {
        nextfield.focus();
      }
    }
  };

  const deleteNumber = () => {
    const filledIndex = pin.findLastIndex((val) => val !== "");
    if (filledIndex !== -1) {
      const newPin = [...pin];
      newPin[filledIndex] = ""; // Remove the last filled number
      setPin(newPin);

      // Focus on the cleared input
      const previousField = document.querySelector(
        `input[name=digit-${filledIndex + 1}]`
      );
      if (previousField !== null && previousField instanceof HTMLInputElement) {
        previousField.focus();
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = e.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      e.preventDefault(); // Prevent any non-numeric character
    }
  };

  const [isCongratulationsModalOpen, setIsCongratulationsModalOpen] =
    useState<boolean>(false);

  const openCongratulationsModal = () => {
    setIsCongratulationsModalOpen(true);
  };

  const closeCongratulationsModal = () => {
    setIsCongratulationsModalOpen(false);
  };

  return (
    <div className="relative p-6 w-full flex flex-col flex-auto justify-between">
      <Navbar title="Top Up E-Wallet" hasChildNode={true} searchEnable={true} moreOptionEnable={true} />
      <div className="flex flex-col py-20">
        <div className="flex justify-center mb-20">
          Enter your PIN to confirm top up
        </div>
        <div className="flex flex-col flex-auto space-y-5">
          <div className="flex flex-row items-center space-x-3">
            {pin.map((digit, index) => (
              <input
                key={index}
                name={`digit-${index + 1}`}
                maxLength={1}
                type="password"
                value={digit}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className="w-20 h-20 basis-1/4 border-2 bg-[#1F222A] border-gray-500 rounded-3xl p-4 hover:bg-gray-700 text-center text-[60px]"
                autoFocus={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isCongratulationsModalOpen}
        onClose={closeCongratulationsModal}
        title="Top Up Successful"
      >
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="font-urbanist text-base text-center">
            You have successfully top up e-wallet for $120.
          </p>
          <button
            className="primary-btn my-8"
            onClick={() => router.push("./")}
          >
            OK
          </button>
        </div>
      </Modal>
      <div className="flex flex-col">
        <button
          className="primary-btn my-8"
          onClick={() => openCongratulationsModal()}
        >
          Continue
        </button>
        <div className="flex flex-col bg-gray-800 rounded-2xl mb-5">
          <div className="flex flex-row items-center">
            {[1, 2, 3].map((num) => (
              <button
                className="basis-1/3 p-6 hover:bg-gray-700 text-xl"
                onClick={(): void => enterNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="flex flex-row items-center bg-gray-800 rounded-2xl">
            {[4, 5, 6].map((num) => (
              <button
                className="basis-1/3 p-6 hover:bg-gray-700 text-xl"
                onClick={(): void => enterNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="flex flex-row items-center">
            {[7, 8, 9].map((num) => (
              <button
                className="basis-1/3 p-6 hover:bg-gray-700 text-xl"
                onClick={(): void => enterNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="flex flex-row items-center bg-gray-800 rounded-2xl">
            <button className="basis-1/3 p-6 hover:bg-gray-700 text-xl rounded-bl-2xl">
              *
            </button>
            <button
              className="basis-1/3 p-6 hover:bg-gray-700 text-xl"
              onClick={(): void => enterNumber(0)}
            >
              0
            </button>
            <button
              className="basis-1/3 p-6 hover:bg-gray-700 text-xl flex justify-center items-center rounded-br-2xl"
              onClick={(): void => deleteNumber()}
            >
              <svg
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
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
    </div>
  );
}
