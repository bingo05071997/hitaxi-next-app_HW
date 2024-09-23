// LocationFab.tsx

'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';

export default function LocationFab() {
  return (
    <div className="px-9">
      {/* Adjusted z-index and bottom positioning */}
      <button className="bg-yellow-500 rounded-full shadow-lg px-2 py-1">
        <FontAwesomeIcon icon={faLocation} className="text-gray-800" />
      </button>
    </div>
  );
}
