"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import CallItem from "@/app/components/items/CallItem";
import callData from "@/app/data/calls.json";
import Image from "next/image";
import AddButton from "@/public/svg/add-button.svg";
import HorizontalBar from "@/app/components/layout/horizontalbar";
import Navbar from "@/app/components/layout/navbar";
import BottomBar from "@/app/components/layout/bottombar";



export default function Call(): JSX.Element {

    return (
        <div className="max-h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-hide">
            <Navbar title="Inbox" hasChildNode={false} />

            <HorizontalBar initialRoute={'call'}/>
            {callData.map(call => (
                <CallItem
                key={call.id}
                name={call.name}
                type={call.type}
                date={call.date}
                imageUrl={call.avatarUrl}
                />
            ))}
            <AddButton
                className="duration-500 ease-in-out cursor-pointer absolute bottom-1/4 right-10"
            />
            <BottomBar selectedButton="inbox"/>

        </div>
    );

}