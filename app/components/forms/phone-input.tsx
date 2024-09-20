
import EmailIcon from "@/public/svg/email-icon.svg";
import { useState } from "react";

type Props = {
  className?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  errors?: string;
};

export default function PhoneNumberInput({
    className,
    name,
    value,
    onChange,
    onBlur,
    errors,
}: Props): JSX.Element {

  const [phoneNumber, setPhoneNumber] = useState<string>(value??"");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(formatPhoneNumber(event.target.value));
    onChange?.(event);
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    return phoneNumber
      .replace(/\D/g, '') // Remove all non-digit characters
      .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3') // Format with dashes
      .substring(0, 12); // Limit to 12 characters
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
        <div className={`flex flex-row items-center justify-start space-x-3 py-3 px-5 bg-light2 dark:bg-dark2 rounded-xl w-full text-gray-900 dark:text-white ${errors?"border-red-500 border-[1px]": ""}`}>
          <input 
              className="bg-transparent border-0 font-semibold text-sm font-urbanist flex-grow focus:outline-none"
              type="text" 
              placeholder="Phone Number"
              onChange={handleChange}
              onBlur={onBlur}
              name={name}
              value={phoneNumber}
              />
        </div>
    </div>
  );
}