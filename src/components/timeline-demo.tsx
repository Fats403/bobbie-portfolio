import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
            My name is Bobbie, an experienced backpacker who wanders between
            different design worlds. I graduated from the New Media Production
            and Design program at the Southern Alberta Institute of Technology
            (SAIT).
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fbobbie-pic.webp?alt=media&token=8d58a33b-33d5-4c93-aaa0-c2b7a75d6126"
              alt="Bobbie"
              width={500}
              height={500}
              className="rounded-lg object-cover h-50 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "My Journey",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
            My design journey began with six enriching years in jewelry design,
            where I honed my craft. However, driven by a strong passion for
            illustration and graphic design, I decided to expand my skills and
            transition into visual design.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fbeetle_2_40.webp?alt=media&token=65c8dc22-7cdd-4b66-88e4-9459a385585a"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-50 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fmechanical-bug.webp?alt=media&token=185160a7-6196-4afe-8101-72d3cffa1d65"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-50 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Skills & Vision",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
            Throughout my academic career, I explored various fields including
            marketing, digital storytelling, and UX/UI design, enhancing my
            skills to offer a more comprehensive creative approach. I aim to use
            my solid foundation in design and my broadened skill set to create
            designs that are not only visually appealing but also serve as
            effective problem-solving tools for my clients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fdemo-img1.webp?alt=media&token=981da9a4-a4e7-477f-b6fe-86f4bd0ed7da"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-50 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fdemo-img2.webp?alt=media&token=3ec745f9-b0b6-44d1-8499-1c0b2d9523d5"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-50 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
