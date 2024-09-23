// NavItem.tsx
// SideNavItem.tsx

'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoIosPaper } from 'react-icons/io'; // Import IoIosPaper if needed

type Props = {
  item: {
    name: string;
    icon: any; // Type for FontAwesomeIcon and other icons
  };
  isSelected: boolean; // Add a prop to determine if the item is selected
  onClick: () => void; // Add onClick handler
};

export default function SideNavItem({ item, isSelected, onClick }: Props) {
  return (
    <li className="flex flex-col items-center gap-1" onClick={onClick}>
      {item.name == 'Booking' ? (
        <item.icon className={`text-${isSelected ? 'yellow-500' : 'gray-400'}`} />
      ) : (
        // Render FontAwesomeIcon if `icon` is from FontAwesome
        // Render other icons (like IoIosPaper) directly
        <FontAwesomeIcon icon={item.icon} className={`text-${isSelected ? 'yellow-500' : 'gray-400'}`} />
      )}
      <div className={` text-sx text-${isSelected ? 'yellow-500' : 'gray-400'}`}>{item.name}</div>
    </li>
  );
}
