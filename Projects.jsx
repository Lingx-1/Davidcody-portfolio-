import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold fontfamily-cursive">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="A food recipe website"
          main="this is a food recipe website use by up coming chefs to enhance their skills created in React and NodeJs"
        />
        <ProjectCard
          title="A"
          main="B"
        />
        <ProjectCard
          title="A"
          main="B"
        />
      </div>
    </div>
  );
};

export default Projects;
