// LocationForm.tsx

'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type Props = {
  onSubmit?: (destination: string) => void;
};

export default function LocationInput({ onSubmit }: Props) {
  const [destination, setDestination] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(destination);
    }
  };

  return (
    <form className="flex items-center rounded-md justify-between mx-4 bg-gray-900 px-4 py-1" onSubmit={handleSubmit}>
      <input
        type="text"
        className=" text-white bg-transparent flex rounded-l-md w-full bg-none text-xs focus:outline-none"
        placeholder="Where would you go?"
        value={destination}
        onChange={handleInputChange}
      />
      <button type="submit" className=" text-gray-400 p-2 rounded-r-xl">
        <FontAwesomeIcon icon={faLocationDot} />
      </button>
    </form>
  );
}
