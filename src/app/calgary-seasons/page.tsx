"use client";
import { ProjectHero } from "@/components/project/project-hero";
import { projectData } from "@/lib/projects-data";

const calgarySeasonsProject = projectData.find(
  (project) => project.link === "/calgary-seasons"
);

export default function Page() {
  return (
    <main>
      <ProjectHero
        title={calgarySeasonsProject?.title || ""}
        subtitle={calgarySeasonsProject?.subtitle || ""}
        image={calgarySeasonsProject?.thumbnail || ""}
        categories={calgarySeasonsProject?.categories || []}
      />
      {/* Rest of the project content */}
    </main>
  );
}
