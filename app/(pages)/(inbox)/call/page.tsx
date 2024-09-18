"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import CallItem from "@/app/components/CallItem";
import callData from "@/app/data/calls.json";
import Image from "next/image";
import AddButton from "@/public/svg/add-button.svg";

export default function Call(): JSX.Element {

    return (
        <div className="max-h-[750px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-hide">
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
                className="duration-500 ease-in-out cursor-pointer fixed bottom-1/4 right-[720px]"
            />
        </div>
    );

}