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
          ({ id, title, description, tech1, tech2 }: MainProjectsType) => {
            return (
              <MainProjectCard
                key={id}
                id={id}
                title={title}
                description={description}
                tech1={tech1}
                tech2={tech2}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default MainProjects;
