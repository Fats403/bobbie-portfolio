import { ProjectHero } from "@/components/project/project-hero";
import { projectData } from "@/lib/projects-data";

const braggCreekProject = projectData.find(
  (project) => project.link === "/bragg-creek-performing-arts"
);

export default function Page() {
  return (
    <main>
      <ProjectHero
        title={braggCreekProject?.title || ""}
        subtitle={braggCreekProject?.subtitle || ""}
        image={braggCreekProject?.thumbnail || ""}
        categories={braggCreekProject?.categories || []}
      />
      {/* Rest of the project content */}
    </main>
  );
}
