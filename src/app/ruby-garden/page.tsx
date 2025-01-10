"use client";
import { ProjectHero } from "@/components/project/project-hero";
import { projectData } from "@/lib/projects-data";

const rubyGardenProject = projectData.find(
  (project) => project.link === "/ruby-garden"
);

export default function Page() {
  return (
    <main>
      <ProjectHero
        title={rubyGardenProject?.title || ""}
        subtitle={rubyGardenProject?.subtitle || ""}
        image={rubyGardenProject?.thumbnail || ""}
        categories={rubyGardenProject?.categories || []}
      />
      {/* Rest of the project content */}
    </main>
  );
}
