"use client";
import { ProjectHero } from "@/components/project/project-hero";
import { projectData } from "@/lib/projects-data";

const astralProject = projectData.find((project) => project.link === "/astral");

export default function Page() {
  return (
    <main>
      <ProjectHero
        title={astralProject?.title || ""}
        subtitle={astralProject?.subtitle || ""}
        description={astralProject?.description || ""}
        image={astralProject?.thumbnail || ""}
        categories={astralProject?.categories || []}
      />
      {/* Rest of the project content */}
    </main>
  );
}
