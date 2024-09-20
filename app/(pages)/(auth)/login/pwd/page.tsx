"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TelegramIcon from "@/public/svg/telegram-icon.svg";
import GoogleIcon from "@/public/svg/google-icon.svg";
import AppleIcon from "@/public/svg/apple-icon.svg";
import Link from "next/link";
import EmailInput from "@/app/components/forms/email-input";
import PasswordInput from "@/app/components/forms/password-input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login, saveUserToLocalStorage } from "@/app/services/auth";

export default function SinginWithPwd(): JSX.Element {
  const router = useRouter();

  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(8, "Must be 8 characters or more").required("Required"), 
    }),
    onSubmit: (values) => handleLogin(values),
  });
  
  const handleLogin = async (values: any) => {
    try {
      const user = await login(values.email, values.password, rememberMe);
      saveUserToLocalStorage(user);
      
      setSuccess("Successfully logged in");
      setError(null);

      // Redirect to Profile Setup page
      router.push('/profilesetup');
    } catch (error: any) {
      setError(error.message || "Login Failed");
      setSuccess(null);
    }
  }

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  return (
    <div className="flex flex-col items-center space-y-5 sm:space-y-10 py-3 sm:py-6 max-w-screen-sm">
      <h1 className="text-center text-5xl font-bold leading-tight w-full">Login to your Account</h1>
      <div className="flex flex-col flex-grow justify-between space-y-5 sm:space-y-10">
        <form className="flex flex-col items-center justify-center space-y-5" onSubmit={formik.handleSubmit}> 
          <EmailInput 
            className="w-full" 
            name="email" 
            value={formik.values.email} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.email}
          />
          
          <PasswordInput 
            className="w-full" 
            name="password" 
            value={formik.values.password} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.password}
          />

          <div className="flex items-center space-x-2">
            <input 
              id="rememberMe"
              type="checkbox" 
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="leading-tight border-primary accent-primary bg-transparent border-1 rounded-lg w-6 h-6"
              />
            <label htmlFor="rememberMe" className="text-sm text-gray-500">
              Remember me
            </label>
          </div>

          <div className="flex flex-row items-center justify-center w-full">
            <button type="submit" className="bg-primary w-full hover:bg-yellow-700 rounded-full text-black font-semibold py-4 px-8 justify-center font-urbanist text-base">
              Sign in
            </button>
          </div>

          <Link className="ml-2 text-primary" href="/signup"> Forgot the password? </Link>

          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}
        </form>

        <div className="flex flex-row items-center justify-center text-base space-x-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[48px] sm:w-[96px]" height="2" viewBox="0 0 96 2" fill="none">
            <line y1="0.75" x2="96" y2="0.75" stroke="#35383F"/>
          </svg>
          <span className="flex-grow text-center">or continue with</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[48px] sm:w-[96px]" height="2" viewBox="0 0 96 2" fill="none">
            <line y1="0.75" x2="96" y2="0.75" stroke="#35383F"/>
          </svg>
        </div>

        <div className="flex flex-row justify-center w-full space-x-5">
          <div className="flex flex-col items-center justify-center">
            <button className="default-btn">
              <TelegramIcon />
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <button className="default-btn">
              <GoogleIcon />
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <button className="default-btn">
              <AppleIcon />
            </button>
          </div>
        </div>
        
        <div className="flex flex-row items-center justify-center font-light text-sm">
          Don&apos;t have an account?
          <Link className="ml-2 text-primary" href="/signup"> Sign up </Link>
        </div>
      </div>
    </div>
  );
}
