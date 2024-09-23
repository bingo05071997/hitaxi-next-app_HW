import ModalLogo from "@/public/svg/topup-modal-icon.svg";

type Props = {
    isOpen: boolean;
    title: string;
    children?: React.ReactNode;
    onClose: () => void;
};

export default function Modal({
    isOpen,
    title,
    children,
    onClose,
}: Props): JSX.Element | null {
    if (!isOpen) 
        return null;

    return (
        <div className="fixed inset-0 bg-[#09101D] bg-opacity-50 z-50"> 
            <div className="flex flex-col items-center justify-center h-full mx-8 sm:mx-10">
                <div className="flex flex-col items-center justify-center bg-light2 dark:bg-dark2 rounded-xl py-10 px-6 sm:px-10 space-y-4">
                    <ModalLogo />
                    <div className="flex flex-row items-center justify-center">
                        <h1 className="text-2xl text-center font-semibold">{title}</h1>
                    </div>
                    { children ?? <div className="">{children}</div> }
                </div>
            </div>
        </div>
    );
}
