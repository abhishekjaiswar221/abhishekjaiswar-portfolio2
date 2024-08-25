import { FC } from "react";
import { MainProjectsType, mainProjects } from "@/data/data";
import MainProjectCard from "./Card/mainProjectCard";

const MainProjects: FC = () => {
  return (
    <section className="w-full flex flex-col gap-6">
      <div>
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Projects
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        {mainProjects.map(
          ({ id, imgSrc, altText, title, techStacks }: MainProjectsType) => {
            return (
              <MainProjectCard
                key={id}
                id={id}
                imgSrc={imgSrc}
                altText={altText}
                title={title}
                techStacks={techStacks}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default MainProjects;
