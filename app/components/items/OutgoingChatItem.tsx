type Props = {
    message: string,
    created_at?: string;
}

export default function OutgoingChatItem(
    { message, created_at} : Props) : JSX.Element {
    return (
        <div className="flex flex-row justify-end rounded-l-2xl rounded-br-2xl p-5 bg-yellow-500 text-black w-3/4 mb-3">
            <div className="flex flex-none basis-3/4 pr-5">
                {message}
            </div>
            <div className="flex flex-none basis-1/4 items-end justify-end text-gray-700">
                {created_at}
            </div>
        </div>
    );
}