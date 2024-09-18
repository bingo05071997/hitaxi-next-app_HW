// components/CallItem.js
import Image from 'next/image';

type Props = {
   name: string,
   date: string,
   type?: string,
   imageUrl: string
};

export default function CallItem({ 
    name, date, type, imageUrl 
} : Props) : JSX.Element {
    return (
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Image src={imageUrl} alt={name} width={50} height={50} className="rounded-full" />
          <div>
            <div className="font-bold">{name}</div>
            <div className="inline-block align-middle">

                <img src={`
                    ${type === 'Incoming' ? '/svg/up-square-icon.svg' : ''}
                    ${type === 'Outgoing' ? '/svg/down-square-icon.svg' : ''}
                    ${type === 'Missed' ? '/svg/close-square-icon.svg' : ''}
                    `} alt="Call Icon" width={16} height={16} className='stroke-yellow-400 inline-block' />
                <span className="ml-2 inline-block text-gray-400">{type} | {date}</span>
            </div>
          </div>
        </div>
        <div>
          {/* Call type icon */}
          <img src="/svg/call-icon.svg" alt="Call Icon" className='stroke-yellow-400' />
        </div>
      </div>
    );
  }