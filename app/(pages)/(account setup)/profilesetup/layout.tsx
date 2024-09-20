
"use client";

import Navbar from "@/app/components/layout/navbar";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function ProfileSetupLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>): JSX.Element {
  return (
    <ProtectedRoute>
      <div className="relative p-6 w-full flex flex-col flex-grow items-start justify-start">
        <Navbar title={"Fill Your Profile"} />
        <div className="flex-grow w-full">
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}
