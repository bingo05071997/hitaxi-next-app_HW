"use client";

import { useState } from "react";
import { useRouter } from "next/router";
<<<<<<< HEAD
import CallItem from "@/app/components/items/CallItem";
import callData from "@/app/data/calls.json";
import Image from "next/image";
import AddButton from "@/public/svg/add-button.svg";
import HorizontalBar from "@/app/components/layout/horizontalbar";
import Navbar from "@/app/components/layout/navbar";
import BottomBar from "@/app/components/layout/bottombar";


=======
import CallItem from "@/app/components/CallItem";
import callData from "@/app/data/calls.json";
import Image from "next/image";
import AddButton from "@/public/svg/add-button.svg";
>>>>>>> 3b5e1e189295e6a16704352ba2e641ab79c42871

export default function Call(): JSX.Element {

    return (
<<<<<<< HEAD
        <div className="max-h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-hide">
            <Navbar title="Inbox" hasChildNode={false} />

            <HorizontalBar initialRoute={'call'}/>
=======
        <div className="max-h-[750px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-hide">
>>>>>>> 3b5e1e189295e6a16704352ba2e641ab79c42871
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
<<<<<<< HEAD
                className="duration-500 ease-in-out cursor-pointer absolute bottom-1/4 right-10"
            />
            <BottomBar selectedButton="inbox"/>

=======
                className="duration-500 ease-in-out cursor-pointer fixed bottom-1/4 right-[720px]"
            />
>>>>>>> 3b5e1e189295e6a16704352ba2e641ab79c42871
        </div>
    );

}