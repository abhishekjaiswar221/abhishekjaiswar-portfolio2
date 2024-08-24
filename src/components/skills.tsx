import React, { FC } from "react";
import TechCard from "@/components/Card/techCard";
import {
  frontendTechIcons,
  backend_devopsTechIcons,
  othersTechIcons,
  devToolsTechIcons,
} from "@/data/data";

const Skills: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          What I Know
        </h3>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-4 gap-6 w-full place-items-center">
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
