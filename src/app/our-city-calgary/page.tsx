"use client";
import { ProjectHero } from "@/components/project/project-hero";
import { projectData } from "@/lib/projects-data";

const ourCityCalgaryProject = projectData.find(
  (project) => project.link === "/our-city-calgary"
);

export default function Page() {
  return (
    <main>
      <ProjectHero
        title={ourCityCalgaryProject?.title || ""}
        subtitle={ourCityCalgaryProject?.subtitle || ""}
        description={ourCityCalgaryProject?.description || ""}
        image={ourCityCalgaryProject?.thumbnail || ""}
        categories={ourCityCalgaryProject?.categories || []}
      />
      {/* Rest of the project content */}
    </main>
  );
}
