import React from "react";

export const About = () => {
  return (
    <div className="flex w-[100%] h-fit px-[80px] py-[96px] justify-between items-start self-stretch bg-[#F9FAFB]">
      <div className="flex w-[100%] flex-col px-[32px] py-0 items-center gap-[48px] flex-[1 0 0]">
        <div className="flex w-[100%] justify-center items-center self-stretch">
          <button className="flex px-[20px] py-[4px] justify-center items-center rounded-[12px] bg-[#E5E7EB] font-sans text-[14px] not-italic font-medium leading-5 text-[#4B5563]">
            About me
          </button>
        </div>
        <div className="flex w-[100%] h-[694px] items-start gap-[48px] self-stretch flex-wrap">
          <div className="flex w-[584px] h-[100%] items-start relative">
            <div className="w-[400px] h-[480px] shrink-0 border-[8px] border-[#F9FAFB] bg-[url(/About.png)] bg-cover absolute left-10 top-0 z-[1]"></div>
            <div className="w-[400px] h-[480px] border-[8px] border-[#F9FAFB] bg-[#E5E7EB] absolute left-0 top-10 "></div>
          </div>
          <div className="flex flex-col gap-[24px] w-[584px] h-[100%] items-start">
            <h2 className="text-[#111827] font-sans text-[30px] not-italic font-[600] leading-[36px] tracking-[-0.6px]">
              Curious about me? Here you have it:
            </h2>
            <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px]">
              I'm a passionate,{" "}
              <span className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px] underline">
                self-proclaimed designer
              </span>
              <span> </span>
              who specializes in full stack development (React.js & Node.js). I
              am very enthusiastic about bringing the technical and visual
              aspects of digital products to life. User experience, pixel
              perfect design, and writing clear, readable, highly performant
              code matters to me.
            </p>
            <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px]">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px]">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px]">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              <span className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px] underline">
                {" "}
                Twitter
              </span>{" "}
              where I share tech-related bites and build in public, or you can
              follow me on{" "}
              <span className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px] underline">
                GitHub
              </span>
              .
            </p>
            <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px]">
              Finally, some quick bits about me.
            </p>
            <div>
              <ul className="flex flex-wrap gap-[10px] list-disc pl-[20px]">
                <li className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px] w-[267px] h-[24px]">
                  B.E. in Computer Engineering
                </li>
                <li className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px] w-[267px] h-[24px]">
                  Full time freelancer
                </li>
                <li className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px] w-[267px] h-[24px]">
                  Avid learner
                </li>
                <li className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px] w-[267px] h-[24px]">
                  Aspiring indie hacker
                </li>
              </ul>
            </div>
            <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-[24px]">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
