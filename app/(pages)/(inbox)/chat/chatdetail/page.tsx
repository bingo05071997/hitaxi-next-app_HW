"use client";

import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

import Navbar from "@/app/components/layout/navbar";
import chatData from "@/app/data/chats.json";
import OutgoingChatItem from "@/app/components/items/OutgoingChatItem";
import TopStatusBar from "@/app/components/layout/topstatusbar";
import IncomingChatItem from "@/app/components/items/IncomingChatItem";

import Image from "next/image";
import MicIcon from "@/public/svg/mic-icon.svg";
import AddImageIcon from "@/public/svg/image-add-icon.svg";

export default function ChatDetail(): JSX.Element {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");

  // Function to handle image upload
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a temporary URL for the image
      setUploadedImage(imageUrl);
    }
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const chat = chatData.find((chat) => chat.id === 1);
  if (!chat) {
    return <div>Chat not found</div>;
  }
  const outgoingMessages = chat.messages.filter(
    (outgoingchat) => outgoingchat.type === "outgoing"
  );
  const incomingMessages = chat.messages.filter(
    (incomingchat) => incomingchat.type === "incoming"
  );
  return (
    <div>
      <Navbar title="Inbox" hasChildNode={true} searchEnable={false} moreOptionEnable={true} callEnable={true}/>
      <div className="flex flex-col">
        <div className="flex w-auto justify-center">
          <TopStatusBar status="Today" />
        </div>
        {outgoingMessages.length > 0 ? (
          outgoingMessages.map((chat, index) => {
            return (
              <div key={index} className="flex justify-end">
                <OutgoingChatItem message={chat.content} created_at={"10:00"} />
              </div>
            );
          })
        ) : (
          <span> no outgoing message</span>
        )}
        <div className="my-5">
          {incomingMessages.length > 0 ? (
            incomingMessages.map((chat, index) => {
              return (
                <div key={index} className="flex justify-start">
                  <IncomingChatItem
                    message={chat.content}
                    created_at={"10:00"}
                  />
                </div>
              );
            })
          ) : (
            <span> no incoming message</span>
          )}
        </div>

        {uploadedImage && (
          <div className="flex justify-end mb-4">
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="w-32 h-32 object-cover rounded-3xl"
            />
          </div>
        )}
        <div className="flex justify-end my-8">
          {newMessage ? (
            <OutgoingChatItem message={newMessage} created_at={"10:00"} />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="absolute bottom-5 w-full right-1">
        <div className=" flex justify-between">
          <div className="relative w-full items-center">
            <input
              type="text"
              name="message"
              id="message"
              value={newMessage}
              onChange={handleInputChange}
              placeholder="Message..."
              className="px-5 pr-12 py-5 h-[56px] rounded-xl bg-[#1F222A] text-[14px] w-full focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:bg-[#FEBB1B14]"
            />
            <label
              htmlFor="image-upload"
              className="absolute right-5 bottom-4 flex h-8.5 w-8.5 cursor-pointer  items-center"
            >
              <AddImageIcon />
              <input
                type="file"
                name="image-upload"
                id="image-upload"
                onChange={handleImageUpload}
                className="sr-only"
              />
            </label>
          </div>
          <div className="flex justify-center items-center duration-500 ease-in-out cursor-pointer bg-yellow-400 text-black rounded-full w-14 h-14 ml-3">
            <MicIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
