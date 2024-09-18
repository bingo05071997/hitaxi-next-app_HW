
import { useState } from "react";
import LockIcon from "@/public/svg/lock-icon.svg";
import EyeIcon from "@/public/svg/eye-icon.svg";

type Props = {
    className?: string;
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    errors?: string;
  };
  
  export default function EmailInput({
      className,
      name,
      value,
      onChange,
      onBlur,
      errors,
  }: Props): JSX.Element {

    const [password, setPassword] = useState<string>(value??"");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
      onChange?.(event);
    };

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="flex flex-col items-center justify-center w-full">
          <div className={`flex flex-row items-center justify-start space-x-3 py-3 px-5 bg-light2 dark:bg-dark2 rounded-xl w-full text-gray-900 dark:text-white ${errors?"border-red-500 border-[1px]": ""}`}>
                <LockIcon />
                <input 
                    className="bg-transparent font-semibold text-sm font-urbanist flex-grow focus:outline-none" 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={onBlur}
                    name={name}
                    placeholder="Password"
                    />

                {   
                    !showPassword ?
                    (
                        <button onClick={toggleShowPassword}>
                            <EyeIcon />
                        </button>
                    )
                    :
                    ""
                }
            </div>
      </div>
    );
  }
