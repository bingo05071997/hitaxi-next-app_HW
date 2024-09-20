"use client";

import Link from "next/link";
import ChatItem from "@/app/components/items/ChatItem";
import chatData from "@/app/data/chats.json";
import AddButton from "@/public/svg/add-button.svg";
import HorizontalBar from "@/app/components/layout/horizontalbar";
import Navbar from "@/app/components/layout/navbar";
import BottomBar from "@/app/components/layout/bottombar";

export default function Chat(): JSX.Element {
    
    return (
        <div className="max-h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-hide">
            <Navbar title="Inbox" hasChildNode={false} />

            <HorizontalBar initialRoute={'chat'}/>
                {chatData.map((chat, index) => {
                    const lastMessage = chat.messages[chat.messages.length - 1];
                    return (
                        <Link 
                            key={index} href="/chat/chatdetail">
                            <ChatItem
                                name={chat.name}
                                message={chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].content : 'No messages yet'}
                                avatarUrl={chat.avatarUrl}
                                unreadCount={chat.unreadCount}
                                lastMessageTime={chat.lastMessageTime}
                            />
                        </Link>
                    );
                })}
            <AddButton
                className="duration-500 ease-in-out cursor-pointer absolute bottom-1/4 right-10"
            />
        <BottomBar selectedButton="inbox"/>
        </div>
    );

}