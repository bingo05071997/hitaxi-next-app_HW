
import AvatarIcon from "@/public/svg/avatar-icon.svg";
import { useState, useRef } from "react";
import Image from "next/image";

type Props = {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  errors?: string;
  readOnly?: boolean;
};

export default function AvatarInput({
    name,
    value,
    onChange,
    onBlur,
    errors,
    readOnly,
}: Props): JSX.Element {
    const [avatar, setAvatar] = useState<string>(value??"/svg/avatar-icon.svg");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleEditClick = () => {
        fileInputRef.current?.click();
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const base64 = e.target?.result as string;
                onChange?.(base64);
                setAvatar(base64);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="relative flex justify-center w-full">
            <div className="relative w-[140px]">
                <Image src={avatar} alt="Avatar" width={140} height={140} className="rounded-full" />
                <button type="button" className="absolute bottom-0 right-0 rounded-full" onClick={handleEditClick}>
                    <Image src="/svg/edit-icon.svg" alt="Avatar" width={35} height={35} />
                </button>
            </div>
            {errors && <p className="text-red-500">{errors}</p>}
            <input 
                ref={fileInputRef}
                className="hidden" 
                type="file"
                accept="image/*" 
                onChange={handleFileChange}
                />
        </div>
    );
}