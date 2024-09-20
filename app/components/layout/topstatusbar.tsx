"use client"

type Props = {
    status: string,
 };

export default function TopStatusBar({status} : Props) : JSX.Element {
    return (
        <span className="bg-gray-800 rounded-xl p-3 my-8 w-auto text-sm/[9px] text-gray-400">{status}</span>
    );
}