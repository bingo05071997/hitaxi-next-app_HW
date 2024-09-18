
type Props = {
  className?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  errors?: string;
};

export default function TextInput({
    className,
    name,
    value,
    placeholder,
    onChange,
    onBlur,
    errors,
}: Props): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full">
        <div className={`flex flex-row items-center justify-start space-x-3 py-3 px-5 bg-light2 dark:bg-dark2 rounded-xl w-full text-gray-900 dark:text-white ${errors?"border-red-500 border-[1px]": ""}`}>
            <input 
                className="bg-transparent border-0 font-semibold text-sm font-urbanist flex-grow focus:outline-none"
                type="text" 
                placeholder={placeholder} 
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                value={value}
                />
        </div>
    </div>
  );
}