// FloatingHeader.tsx

'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faPercentage } from '@fortawesome/free-solid-svg-icons';

export default function FloatingHeader() {
  return (
    <div className="fixed top-4 right-8 flex space-x-4 z-20">
      {' '}
      {/* Adjusted z-index */}
      <button className="bg-yellow-500 rounded-full shadow-lg w-8 h-8 flex items-center justify-center">
        <FontAwesomeIcon icon={faSearch} className="text-gray-800" />
      </button>
      <button className="bg-yellow-500 rounded-full shadow-lg w-8 h-8 flex items-center justify-center">
        <FontAwesomeIcon icon={faBell} className="text-gray-800" />
      </button>
      <button className="bg-yellow-500 rounded-full shadow-lg w-8 h-8 flex items-center justify-center">
        <FontAwesomeIcon icon={faPercentage} className="text-gray-800" />
      </button>
    </div>
  );
}
