import React from "react";
import { skillsIcon } from "../../utils/dummyData";
import { skillsIcon1 } from "../../utils/dummyData";
import Image from "next/image";

export const Skills = () => {
  return (
    <div className="flex w-[100%] h-fit px-[80px] py-[96px] justify-between items-start self-stretch bg-[#FFF]">
      <div className="flex w-[100%] px-[32px] py-0 flex-col items-start justify-center gap-[48px]">
        <div className="flex w-[100%] py-0 flex-col items-start justify-center gap-[16px]">
          <div className="flex w-[100%] justify-center items-center self-stretch">
            <button className="flex px-[20px] py-[4px] justify-center items-center rounded-[12px] bg-[#E5E7EB] font-sans text-[14px] not-italic font-medium leading-5 text-[#4B5563]">
              Skills
            </button>
          </div>
          <div className="flex w-[100%] justify-center items-center self-stretch">
            <p className="max-w-[576px] self-stretch text-[#4B5563] text-center font-sans text-[20px] not-italic font-normal leading-[28px]">
              The skills, tools and technologies I am really good at:
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[48px] self-stretch flex-wrap w-[100%] h-[248px]">
          <div className="flex justify-between items-center self-stretch w-[100%]">
            {skillsIcon.map((element) => (
              <div className="flex flex-col justify-center items-center gap-[8px] self-stretch">
                {<Image src={element.icon} width={64} height={64} />}
                <p>{element.iconName}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center self-stretch w-[100%]">
            {skillsIcon1.map((element) => (
              <div className="flex flex-col justify-center items-center gap-[8px] self-stretch">
                {<Image src={element.icon} width={64} height={64} />}
                <p>{element.iconName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
