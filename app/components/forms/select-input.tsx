
type Props = {
  className?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  options?: Option[];
  onChange?: (value: string) => void;
  errors?: string;
};

type Option = {
  value: string;
  label: string;
}

export default function SelectInput({
    name,
    value,
    options,
    onChange,
    errors,
}: Props): JSX.Element {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
        <select 
            className={`bg-light2 dark:bg-dark2 pr-5 rounded-xl py-3 px-5 w-full text-gray-900 dark:text-white font-semibold text-sm font-urbanist flex-grow focus:outline-none ${errors?"border-red-500 border-[1px]": ""}`} 
            name={name}
            value={value}
            onChange={handleChange}
        >
            {options?.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
            ))}
        </select>
        {errors && <p className="text-red-500">{errors}</p>}
    </div>
  );
}
