'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function SlidingFab() {
  return (
    <div className=" left-2">
      {/* Scrollable Container */}
      <div className="flex overflow-x-auto space-x-2 max-w-[100vw] whitespace-nowrap">
        {/* Button 1 */}
        <button className="border flex items-center bg-transparent border-yellow-500 text-yellow-500 rounded-full shadow-lg px-3 py-2 flex-shrink-0">
          <FontAwesomeIcon icon={faLocationDot} className="text-yellow-500" />
          <span className="text-xs px-1">Home</span>
        </button>
        {/* Button 2 */}
        <button className="border flex items-center bg-transparent border-yellow-500 text-yellow-500 rounded-full shadow-lg px-3 py-2 flex-shrink-0">
          <FontAwesomeIcon icon={faLocationDot} className="text-yellow-500" />
          <span className="text-xs px-1">Office</span>
        </button>
        {/* Button 3 */}
        <button className="border flex items-center bg-transparent border-yellow-500 text-yellow-500 rounded-full shadow-lg px-3 py-2 flex-shrink-0">
          <FontAwesomeIcon icon={faLocationDot} className="text-yellow-500" />
          <span className="text-xs px-1">Apartment</span>
        </button>
        {/* Button 4 (additional) */}
        <button className="border flex items-center bg-transparent border-yellow-500 text-yellow-500 rounded-full shadow-lg px-3 py-2 flex-shrink-0">
          <FontAwesomeIcon icon={faLocationDot} className="text-yellow-500" />
          <span className="text-xs px-1">Museum</span>
        </button>
        {/* Add more buttons as needed */}
      </div>
    </div>
  );
}
