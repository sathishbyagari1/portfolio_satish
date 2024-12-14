import React from "react";
import TechnologyStack from "./TechnologyStack";
import Title from "./Title";
import ProjectSection from "./ProjectSection";
import AboutMe from "./AboutMe";
import EducationSection from "./EducationSection";

function HomePage() {
  return (
    <div>
      <Title name="Sathish Byagari" leadText="Iam a Student of IS Department" />
      <EducationSection />
      <TechnologyStack />
      <ProjectSection />
      <AboutMe />
    </div>
  );
}
export default HomePage;
