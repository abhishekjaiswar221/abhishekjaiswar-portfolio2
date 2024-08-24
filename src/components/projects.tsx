import React, { FC } from "react";
import { projects } from "@/data/data";
import ProjectCard from "./Card/projectCard";
import { ProjectType } from "@/data/data";

const Projects: FC = () => {
  return (
    <section className="flex flex-col gap-5 justify-center items-center">
      <div>
        <h3 className="text-center scroll-m-20 text-2xl font-semibold tracking-tight">
          Some of my work
        </h3>
      </div>
      <div className="mx-auto md:grid-cols-2 grid lg:grid-cols-3 w-full gap-4 md:pb-8 lg:pb-20">
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
