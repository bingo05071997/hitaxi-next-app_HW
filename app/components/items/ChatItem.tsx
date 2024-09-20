// components/CallItem.js
import Image from 'next/image';

type Props = {
   name: string,
   message?: string,
   avatarUrl: string,
   unreadCount?: number,
   lastMessageTime?: string
};

export default function ChatItem({ 
    name, message, avatarUrl, unreadCount, lastMessageTime 
} : Props) : JSX.Element {
    return (
      <button 
        className="flex items-center justify-between w-full p-4 cursor-pointer hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <div className="flex items-center space-x-4">
          <Image src={avatarUrl} alt={name} width={50} height={50} className="rounded-full" />
          <div className='flex flex-col'>
            <div className="font-bold text-left">{name}</div>
            <div className="inline-block text-gray-400 text-left">
              {message}
            </div>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          {/* Call type icon */}
          <div className={unreadCount !== 0 ? 'bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs' : ''}>{unreadCount !== 0 ? unreadCount : ''}</div>
          <div className='rounded-full items-center'>{lastMessageTime}</div>
        </div>
      </button>
    );
  }