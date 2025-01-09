"use client";
import { ProjectHero } from "@/components/project/project-hero";
import { projectData } from "@/lib/projects-data";

const hatshepsutProject = projectData.find(
  (project) => project.link === "/hatshepsut"
);

export default function Page() {
  return (
    <main>
      <ProjectHero
        title={hatshepsutProject?.title || ""}
        subtitle={hatshepsutProject?.subtitle || ""}
        description={hatshepsutProject?.description || ""}
        image={hatshepsutProject?.thumbnail || ""}
        categories={hatshepsutProject?.categories || []}
      />
      {/* Rest of the project content */}
    </main>
  );
}
