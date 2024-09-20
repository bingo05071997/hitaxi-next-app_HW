"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    initialRoute: string,
 };

export default function HorizontalBar({initialRoute} : Props) : JSX.Element {
    const [activeTab, setActiveTab] = useState(initialRoute);
    const router = useRouter();
    return (
        <nav className="flex items-center my-2">
            <div className={`flex items-center xl:text-[18px] font-semibold justify-center basis-1/2 rounded ${activeTab === 'chat' ? 'border-yellow-400 border-b-4':'border-gray-400 border-b-2'}`}>
                <button className={`transition duration-300 hover:text-[#ffffff] py-3 ${activeTab === 'chat' ? 'text-yellow-400':'text-gray-400'}`}
                onClick={() => {
                    setActiveTab('chat');
                    router.push('/chat')}}>
                    Chats
                </button>
            </div>
            <div className={`flex items-center xl:text-[18px] font-semibold justify-center basis-1/2 border-b-2 rounded ${activeTab === 'call' ? 'border-yellow-400 border-b-4':'border-gray-400 border-b-2'}`}>
                <button className={`transition duration-300 hover:text-[#ffffff] py-3 ${activeTab === 'call' ? 'text-yellow-400':'text-gray-400'}`}
                onClick={() => {
                    setActiveTab('call');
                    router.push('/call');}}>
                    Calls
                </button>
            </div>
        </nav>
    );
}