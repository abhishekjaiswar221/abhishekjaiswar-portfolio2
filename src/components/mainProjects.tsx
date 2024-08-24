import { FC } from "react";
import { MainProjectsType, mainProjects } from "@/data/data";
import MainProjectCard from "./Card/mainProjectCard";

const MainProjects: FC = () => {
  return (
    <section className="flex flex-col gap-4 md:flex-row items-center justify-between w-full">
      <div>
        <h3 className="md:hidden scroll-m-20 text-2xl font-semibold tracking-tight">
          Projects
        </h3>
      </div>
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
    </section>
  );
};

export default MainProjects;
