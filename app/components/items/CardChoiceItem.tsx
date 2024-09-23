import { useState } from "react";

type Props = {
  nameId: string;
  name: string;
  avatarUrl: string;
};

export default function WalletItem({
  nameId,
  name,
  avatarUrl,
}: Props): JSX.Element {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div className="p-6 bg-gray-800 rounded-2xl my-6">
      <label
        htmlFor={nameId}
        className="flex flex-row justify-between cursor-pointer select-none items-center"
      >
        <img src={avatarUrl} className="flex"/>
        <div className="flex-auto pl-4">{name}</div>
        <div className="relative flex">
          <input
            type="checkbox"
            id={nameId}
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`box mr-4 flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-primary`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                isChecked && "bg-yellow-500 dark:bg-yellow-500"
              }`}
            ></span>
          </div>
        </div>
      </label>
    </div>
  );
}
