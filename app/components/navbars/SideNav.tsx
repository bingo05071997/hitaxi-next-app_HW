// SideNav.tsx

'use client';
import { useState } from 'react';
import { faWallet, faHouse, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';
import { IoIosPaper } from 'react-icons/io'; // Import IoIosPaper
import LocationInput from '../forms/locaion-input'; // Import the LocationInput component
import SideNavItems from '@/app/components/navbars/SideNavItems';
import SideNavItem from '@/app/components/navbars/SideNavItem';

export default function SideNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null); // State to track the selected item

  // Toggle the expanded state when the user clicks the handle
  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle item selection
  const handleItemClick = (name: string) => {
    setSelectedItem(name);
  };

  // Handle form submission (you can use this for logging or navigating)
  const handleFormSubmit = (destination: string) => {
    console.log(`Destination: ${destination}`);
  };

  const navItems = [
    { name: 'Home', icon: faHouse },
    { name: 'Wallet', icon: faWallet },
    { name: 'Booking', icon: IoIosPaper }, // Added Booking icon
    { name: 'Messages', icon: faCommentDots },
    { name: 'Profile', icon: faUser },
  ];

  return (
    <div
      className="fixed bottom-0 gap-2 flex flex-col left-0 w-full rounded-3xl bg-black z-30 transition-all duration-300"
      style={{ height: isExpanded ? '10rem' : '8rem' }} // Toggle height based on state
    >
      {/* Clickable handle */}
      <div className="w-10 h-1 mt-1 bg-gray-700 rounded-full mx-auto cursor-pointer mb-2" onClick={toggleNav} />

      {/* Location Form as a Child Component */}
      <LocationInput onSubmit={handleFormSubmit} />

      {/* SideNav Items */}
      <SideNavItems>
        {navItems.map((item, index) => (
          <SideNavItem
            key={index}
            item={item}
            isSelected={item.name === selectedItem} // Pass selected state
            onClick={() => handleItemClick(item.name)} // Handle item click
          />
        ))}
      </SideNavItems>
    </div>
  );
}
