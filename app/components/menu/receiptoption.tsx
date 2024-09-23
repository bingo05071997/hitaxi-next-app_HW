export default function Example(): JSX.Element {
  return (
    <div className="absolute right-10 top-18 w-52 text-right z-10">
      <div className="rounded-xl border border-white/5 bg-[#1F222A] p-1 text-sm text-white">
        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
          <svg
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.57836 9.36481C8.57836 9.36481 -1.40218 7.30015 2.06611 5.29802C4.9929 3.60861 15.0795 0.703981 16.4887 1.45448C17.2392 2.86365 14.3346 12.9503 12.6452 15.8771C10.643 19.3454 8.57836 9.36481 8.57836 9.36481Z"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.57812 9.36444L16.4885 1.4541"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Share E-Receipt
        </button>

        <div className="my-1 h-px bg-white/5" />

        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
          <svg
            width="16"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7993 5.91699L10.0743 1.41699C9.46602 1.33366 8.78268 1.29199 8.03268 1.29199C2.79102 1.29199 1.04102 3.22533 1.04102 9.00033C1.04102 14.7837 2.79102 16.7087 8.03268 16.7087C13.2827 16.7087 15.0327 14.7837 15.0327 9.00033C15.0327 7.81699 14.9577 6.79199 14.7993 5.91699Z"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.61133 1.36133V3.57883C9.61133 5.12716 10.8663 6.38133 12.4147 6.38133H14.8738"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Download E-Receipt
        </button>

        <div className="my-1 h-px bg-white/5" />

        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
          <svg
            width="16"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9952 12.0807H4.97852"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.9952 8.94694H4.97852"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.27435 5.8151H4.97852"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.00781 9.00033C1.00781 14.7812 2.75615 16.7087 8.00031 16.7087C13.2453 16.7087 14.9928 14.7812 14.9928 9.00033C14.9928 3.21949 13.2453 1.29199 8.00031 1.29199C2.75615 1.29199 1.00781 3.21949 1.00781 9.00033Z"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Print
        </button>
      </div>
    </div>
  );
}
