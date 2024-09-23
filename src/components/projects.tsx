import React, { FC } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./Card/projectCard";
import { ProjectType } from "@/data/dataTypes";

const Projects: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <div>
        <h3 className="scroll-m-20 text-center text-2xl font-semibold tracking-tight">
          Some more Projects
        </h3>
      </div>
      <div className="mx-auto grid w-full gap-4 md:grid-cols-2 md:pb-8 lg:grid-cols-3 lg:pb-20">
        {projects.map(
          ({
            id,
            title,
            description,
            imageSrc,
            website,
            github,
          }: ProjectType) => {
            return (
              <ProjectCard
                key={id}
                id={id}
                title={title}
                imageSrc={imageSrc}
                description={description}
                website={website}
                github={github}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
