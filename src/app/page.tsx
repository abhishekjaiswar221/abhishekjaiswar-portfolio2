import React, { FC } from "react";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
// import Projects from "@/components/projects";
import MainProjects from "@/components/mainProjects";

const Home: FC = () => {
  return (
    <main className="flex min-h-screen flex-col gap-10 bg-[#fafbfc] px-6 pb-10 md:px-10 lg:px-20 xl:px-32">
      <section id="hero">
        <Hero />
      </section>
      <section id="main-projects">
        <MainProjects />
      </section>
      {/* <section id="projects">
        <Projects />
      </section> */}
      <section id="skills">
        <Skills />
      </section>
    </main>
  );
};

export default Home;
