import { FC } from "react";
import { mainProjects } from "@/data/mainProjects";
import { MainProjectsType } from "@/data/dataTypes";
import MainProjectCard from "./Card/mainProjectCard";

const MainProjects: FC = () => {
  return (
    <section className="flex w-full flex-col gap-10">
      <div>
        <h3 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight text-[#3c3c43]">
          Projects
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
        {mainProjects.map(
          ({
            id,
            imgSrc,
            altText,
            title,
            techStacks,
            githubLink,
            liveLink,
          }: MainProjectsType) => {
            return (
              <MainProjectCard
                key={id}
                id={id}
                imgSrc={imgSrc}
                altText={altText}
                title={title}
                techStacks={techStacks}
                githubLink={githubLink}
                liveLink={liveLink}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default MainProjects;
