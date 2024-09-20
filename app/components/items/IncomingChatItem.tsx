type Props = {
    message: string,
    created_at?: string;
}

export default function IncomingChatItem(
    { message, created_at} : Props) : JSX.Element {
    return (
        <div className="flex flex-row justify-end rounded-r-2xl rounded-bl-2xl p-5 bg-gray-700 w-3/4 mb-3">
            <div className="flex basis-3/4">
                {message}
            </div>
            <div className="flex basis-1/4 items-end justify-end text-white">
                {created_at}
            </div>
        </div>
    );
}