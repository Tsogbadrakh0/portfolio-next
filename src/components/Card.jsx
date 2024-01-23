import React from "react";
import Image from "next/image";
import { experienceData } from "../../utils/dummyDataCards";
import { workData } from "../../utils/dummyDataCards";

export const ExperienceCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[48px] ">
      {experienceData.map((element) => (
        <div className="flex w-[896px] p-[32px] items-start justify-center rounded-[12px] bg-[#FFF] shadow-md">
          <div className="flex w-[100%] justify-between gap-12 self-stretch">
            <div className="flex items-start flex-[1 0 0]">
              {<Image src={element.icon} width={102} height={28} />}
            </div>
            <div className="flex w-[384px] flex-col items-start gap-4">
              <h2 className="text-[#111827] font-sans text-[20px] not-italic font-semibold leading-7">
                {element.position}
              </h2>
              <ul className="list-disc pl-[25px]">
                {element.responsible.map((rep) => (
                  <li className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6">
                    {rep}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#374151] font-sans text-[16px] not-italic font-normal leading-6">
                {element.posDate}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const WorkCard = () => {
  return (
    <div className="flex flex-col gap-[48px]">
      {workData.map((work) =>
        work.id == "reverse" ? (
          <div className="flex w-[1152px] rounded-[12px] shadow-md justify-center">
            <div className="flex p-[48px] flex-col items-center gap-[24px] flex-[1 0 0] self-stretch rounded-[12px 0 0 12px] w-[576px] h-[480px]">
              <div className="flex w-[100%] justify-start items-start">
                <h2 className="text-[#111827] font-sans text-[20px] not-italic font-semibold leading-7">
                  {work.workTitle}
                </h2>
              </div>
              <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6">
                {work.workDescription}
              </p>
              <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                {work.workSkills.map((skills) => (
                  <button className="flex px-[20px] py-1 justify-center items-center rounded-xl bg-[#E5E7EB] text-[#4B5563] font-sans text-[14px] not-italic font-medium leading-5">
                    {skills}
                  </button>
                ))}
              </div>
              <div className="flex items-center self-stretch ">
                {<Image src={work.workIcon} width={24} height={24} />}
              </div>
            </div>
            <div className=" flex p-[48px] justify-center items-center flex-[1 0 0] self-stretch rounded-[12px] border-r-[#F3F4F6] bg-[#F9FAFB] w-[576px] h-[480px]">
              {
                <Image
                  src={work.image}
                  width={480}
                  height={384}
                  objectFit="cover"
                  style={{
                    borderRadius: "12px",
                    boxShadow:
                      "0px 10px 8px 0px rgba(0, 0, 0, 0.04), 0px 4px 3px 0px rgba(0, 0, 0, 0.10)",
                  }}
                />
              }
            </div>
          </div>
        ) : (
          <div className="flex w-[1152px] rounded-[12px] shadow-md justify-center">
            <div className=" flex p-[48px] justify-center items-center flex-[1 0 0] self-stretch rounded-[12px] border-r-[#F3F4F6] bg-[#F9FAFB] w-[576px] h-[480px]">
              {
                <Image
                  src={work.image}
                  width={480}
                  height={384}
                  objectFit="cover"
                  style={{
                    borderRadius: "12px",
                    boxShadow:
                      "0px 10px 8px 0px rgba(0, 0, 0, 0.04), 0px 4px 3px 0px rgba(0, 0, 0, 0.10)",
                  }}
                />
              }
            </div>
            <div className="flex p-[48px] flex-col items-center gap-[24px] flex-[1 0 0] self-stretch rounded-[12px 0 0 12px] w-[576px] h-[480px]">
              <div className="flex w-[100%] justify-start items-start">
                <h2 className="text-[#111827] font-sans text-[20px] not-italic font-semibold leading-7">
                  {work.workTitle}
                </h2>
              </div>
              <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6">
                {work.workDescription}
              </p>
              <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                {work.workSkills.map((skills) => (
                  <button className="flex px-[20px] py-1 justify-center items-center rounded-xl bg-[#E5E7EB] text-[#4B5563] font-sans text-[14px] not-italic font-medium leading-5">
                    {skills}
                  </button>
                ))}
              </div>
              <div className="flex items-center self-stretch ">
                {<Image src={work.workIcon} width={24} height={24} />}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
