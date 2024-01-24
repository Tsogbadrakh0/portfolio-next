import React from "react";

export const ContactMe = () => {
  return (
    <div className="flex px-[80px] py-[96px] flex-col justify-center items-center self-stretch bg-[#FFF]">
      <div className="flex px-[32px] py-0 flex-col justify-center items-center gap-[48px] self-stretch">
        <div className="flex flex-col items-start gap-[16px] self-stretch justify-center">
          <div className="flex justify-center items-center self-stretch">
            <button className="flex px-5 py-1 justify-center items-center rounded-[12px] bg-[#E5E7EB] font-sans text-[14px] not-italic font-medium leading-5">
              Get in touch
            </button>
          </div>
          <div className="flex flex-col w-[100%] justify-center items-center self-stretch text-center">
            <div>
              <p className="max-w-[576px] self-stretch text-[#4B5563] font-sans text-[20px] not-italic font-normal leading-7">
                What’s next? Feel free to reach out to me if you're looking for
                a developer, have a query, or simply want to connect.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[100%] flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-5">
              <div>
                <img src="/icons/icon-message.svg" alt="" />
              </div>
              <span className="text-[#111827] text-center font-sans text-[36px] not-italic font-semibold leading-10 tracking-[-0.72px]">
                reachsagarshah@gmail.com
              </span>
              <div>
                <img src="/icons/icon-copy.svg" alt="" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div>
                <img src="/icons/icon-phone.svg" alt="" />
              </div>
              <span className="text-[#111827] text-center font-sans text-[36px] not-italic font-semibold leading-10 tracking-[-0.72px]">
                +91 8980500565
              </span>
              <div>
                <img src="/icons/icon-copy.svg" alt="" />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex justify-center items-center self-stretch">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6">
              You may also find me on these platforms!
            </p>
            <div className="flex justify-center items-center gap-4 self-stretch">
              <img src="/icons/icon-github.svg" alt="" />
              <img src="/icons/icon-twitter.svg" alt="" />
              <img src="/icons/icon-fig.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};