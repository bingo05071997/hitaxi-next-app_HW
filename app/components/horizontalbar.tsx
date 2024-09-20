"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HorizontalBar() : JSX.Element {
    const [activeTab, setActiveTab] = useState('calls');
    const router = useRouter();
    return (
        <nav className="flex items-center my-2">
            <div className={`flex items-center xl:text-[18px] font-semibold justify-center basis-1/2 rounded ${activeTab === 'chats' ? 'border-yellow-400 border-b-4':'border-gray-400 border-b-2'}`}>
                <button className={`transition duration-300 hover:text-[#ffffff] py-3 ${activeTab === 'chats' ? 'text-yellow-400':'text-gray-400'}`}
                onClick={() => {
                    setActiveTab('chats');
                    router.push('/chat')}}>
                    Chats
                </button>
            </div>
            <div className={`flex items-center xl:text-[18px] font-semibold justify-center basis-1/2 border-b-2 rounded ${activeTab === 'calls' ? 'border-yellow-400 border-b-4':'border-gray-400 border-b-2'}`}>
                <button className={`transition duration-300 hover:text-[#ffffff] py-3 ${activeTab === 'calls' ? 'text-yellow-400':'text-gray-400'}`}
                onClick={() => {
                    setActiveTab('calls');
                    router.push('/call');}}>
                    Calls
                </button>
            </div>
        </nav>
    );
}