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
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Image src={avatarUrl} alt={name} width={50} height={50} className="rounded-full" />
          <div>
            <div className="font-bold">{name}</div>
            <div className="ml-2 inline-block text-gray-400">
              {message}
            </div>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          {/* Call type icon */}
          <div className={unreadCount !== 0 ? 'bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs' : ''}>{unreadCount !== 0 ? unreadCount : ''}</div>
          <div className='rounded-full items-center'>{lastMessageTime}</div>
        </div>
      </div>
    );
  }