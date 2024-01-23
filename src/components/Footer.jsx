import React from "react";

export const Footer = () => {
  return (
    <div className="flex px-[80px] py-[24px] justify-center items-center self-stretch bg-[#F9FAFB]">
      <div className="flex px-[32px] py-0 justify-center items-center self-stretch">
        <div className="flex px-[32px] py-0 justify-center items-center self-stretch gap-2">
          <img src="/icons/icon-copyright.jpg" alt="" />
          <p className="text-[#4B5563] font-sans text-[14px] not-italic font-normal leading-5">
            2023 |{" "}
            <span className="text-[#4B5563] font-sans text-[14px] not-italic font-normal leading-5 underline">
              Designed
            </span>{" "}
            and{" "}
            <span className="text-[#4B5563] font-sans text-[14px] not-italic font-normal leading-5 underline">
              coded
            </span>{" "}
            with ❤️️ by Sagar Shah
          </p>
        </div>
      </div>
    </div>
  );
};
