"use client";

import LoginLogo from "@/public/svg/login-logo.svg";
import TelegramIcon from "@/public/svg/telegram-icon.svg";
import GoogleIcon from "@/public/svg/google-icon.svg";
import AppleIcon from "@/public/svg/apple-icon.svg";
import Link from "next/link";

export default function Login(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-6">
      <LoginLogo />
      <h1 className="text-center">Let&apos;s you in</h1>
      <div className="flex flex-col flex-grow justify-center space-y-4 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <button className="default-btn">
            <TelegramIcon className="mr-3" /> Continue with Telegram
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center ">
          <button className="default-btn">
            <GoogleIcon className="mr-3" /> Continue with Google
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <button className="default-btn">
            <AppleIcon className="mr-3" /> Continue with Apple
          </button>
        </div>

        <div className="flex flex-row items-center justify-center text-base">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[100px] sm:w-[155px]" height="2" viewBox="0 0 155 2" fill="none">
            <line y1="0.75" x2="155" y2="0.75" stroke="#35383F"/>
          </svg>
          Or
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[100px] sm:w-[155px]" height="2" viewBox="0 0 155 2" fill="none">
            <line y1="0.75" x2="155" y2="0.75" stroke="#35383F"/>
          </svg>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <Link href="/login/pwd" className="primary-btn">
            Sign in with password
          </Link>
        </div>
        
        <div className="flex flex-row items-center justify-center font-light text-sm">
          Don&apos;t have an account?
          <Link className="ml-2 text-yellow-500" href="/signup"> Sign up </Link>
        </div>
      </div>
    </div>
  );
}
