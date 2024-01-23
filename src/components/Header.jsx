import React from "react";

export const Header = () => {
  return (
    <div className="flex w-[100%] px-[80px] py-[16px] justify-between items-center border-b border-[rgba(255, 255, 255, 0.00)] bg-[#FFF] self-stretch">
      <div className="flex w-[100%] px-[32px] py-0 justify-between items-center flex-[1 0 0]">
        <h1 className="text-black text-center font-sans text-[30px] not-italic font-bold leading-9 tracking-[-0.6px]">
          &lt;SS /&gt;
        </h1>
        <div className="flex gap-5">
          <div className="flex gap-3 justify-center items-center">
            <ul className="flex gap-[24px] justify-center items-center">
              <li className="text-[#4B5563] font-sans text-[16px] not-italic font-medium leading-6">
                About
              </li>
              <li className="text-[#4B5563] font-sans text-[16px] not-italic font-medium leading-6">
                Work
              </li>
              <li className="text-[#4B5563] font-sans text-[16px] not-italic font-medium leading-6">
                Testimonials
              </li>
              <li className="text-[#4B5563] font-sans text-[16px] not-italic font-medium leading-6">
                Contact
              </li>
            </ul>
          </div>
          <div className="flex gap-[16px] justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2V4"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 20V22"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.92993 4.92999L6.33993 6.33999"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.6599 17.66L19.0699 19.07"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12H4"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12H22"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.33993 17.66L4.92993 19.07"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.0699 4.92999L17.6599 6.33999"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <button className="flex px-[16px] py-[6px] justify-center items-center gap-[8px] bg-[#111827] rounded-[12px] text-[#F9FAFB] font-sans text-[16px] font-medium">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
