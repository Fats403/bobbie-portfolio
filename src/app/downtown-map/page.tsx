"use client";
import { ProjectHero } from "@/components/project/project-hero";
import { projectData } from "@/lib/projects-data";

const downtownMapProject = projectData.find(
  (project) => project.link === "/downtown-map"
);

export default function Page() {
  return (
    <main>
      <ProjectHero
        title={downtownMapProject?.title || ""}
        subtitle={downtownMapProject?.subtitle || ""}
        image={downtownMapProject?.thumbnail || ""}
        categories={downtownMapProject?.categories || []}
      />
      {/* Rest of the project content */}
    </main>
  );
}
