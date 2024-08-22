import TechCard from "@/components/Card/techCard";
import {
  frontendTechIcons,
  devopsTechIcons,
  backend_databaseTechIcons,
} from "@/data/data";

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          What I Know
        </h3>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-10">
        <TechCard cardTitle={"Frontend"} iterableArray={frontendTechIcons} />
        <TechCard
          cardTitle={"Backend & Database"}
          iterableArray={backend_databaseTechIcons}
        />
        <TechCard cardTitle={"Devops"} iterableArray={devopsTechIcons} />
      </div>
    </section>
  );
};

export default Skills;
