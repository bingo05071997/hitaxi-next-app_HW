"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import ChatItem from "@/app/components/ChatItem";
import chatData from "@/app/data/chats.json";
import AddButton from "@/public/svg/add-button.svg";

export default function Chat(): JSX.Element {

   
    return (
        <div className="max-h-[750px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-hide">
            {chatData.map((chat, index) => {
                const lastMessage = chat.messages[chat.messages.length - 1];
                return (
                    <ChatItem
                        key={index}
                        name={chat.name}
                        message={chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].content : 'No messages yet'}
                        avatarUrl={chat.avatarUrl}
                        unreadCount={chat.unreadCount}
                        lastMessageTime={chat.lastMessageTime}
                    />
            );
        })}
            <AddButton
                className="duration-500 ease-in-out cursor-pointer fixed bottom-1/4 right-[720px]"
            />
        </div>
    );

}