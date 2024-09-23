import React, { FC } from "react";
import TechCard from "@/components/Card/techCard";

import { frontendTechIcons } from "@/data/techIcons";
import { othersTechIcons } from "@/data/techIcons";
import { devToolsTechIcons } from "@/data/techIcons";
import { backend_devopsTechIcons } from "@/data/techIcons";

const Skills: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <div>
        <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight text-[#3c3c43]">
          What I Know
        </h3>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5 md:grid md:grid-cols-2 md:gap-10">
        <TechCard cardTitle={"Frontend"} iterableArray={frontendTechIcons} />
        <TechCard
          cardTitle={"Backend & DevOps"}
          iterableArray={backend_devopsTechIcons}
        />
        <TechCard cardTitle={"Dev Tools"} iterableArray={devToolsTechIcons} />
        <TechCard cardTitle={"Others"} iterableArray={othersTechIcons} />
        {/* <TechCard cardTitle={"DevOps"} iterableArray={devopsTechIcons} /> */}
        {/* <TechCard
          cardTitle={"Build & Linting Tools"}
          iterableArray={build_lintingToolsTechIcons}
        /> */}
        {/* <TechCard
          cardTitle={"Package Managers"}
          iterableArray={packageManagersTechIcons}
        /> */}
      </div>
    </section>
  );
};

export default Skills;
