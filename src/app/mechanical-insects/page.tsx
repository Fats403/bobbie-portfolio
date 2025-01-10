"use client";
import { ProjectHero } from "@/components/project/project-hero";
import { projectData } from "@/lib/projects-data";

const mechanicalInsectsProject = projectData.find(
  (project) => project.link === "/mechanical-insects"
);

export default function Page() {
  return (
    <main>
      <ProjectHero
        title={mechanicalInsectsProject?.title || ""}
        subtitle={mechanicalInsectsProject?.subtitle || ""}
        image={mechanicalInsectsProject?.thumbnail || ""}
        categories={mechanicalInsectsProject?.categories || []}
      />
      {/* Rest of the project content */}
    </main>
  );
}
