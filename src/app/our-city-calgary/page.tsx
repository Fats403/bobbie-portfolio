"use client";
import { GridImage, ProjectGrid } from "@/components/project/project-grid";
import { Footer } from "@/components/ui/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import ProjectDescription from "@/components/project/project-description";
import { ProjectHero } from "@/components/project/project-hero";
import { projectData } from "@/lib/projects-data";

const ourCityCalgaryProject = projectData.find(
  (project) => project.link === "/our-city-calgary"
);

const gridImages: GridImage[] = [
  {
    colSpan: 2,
    rowSpan: 2,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/43cbee8a-6f72-403d-8173-316c2bddd86b_rw_1200.gif?h=1811165af89b624e660b3a2eb8c93f5f",
  },
  {
    colSpan: 2,
    rowSpan: 2,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/045683df-4fd5-4180-8ae9-56e3b7fb9903.jpg?h=e447c1d6fc22a7fd4dac4a63f4399160",
  },
  {
    colSpan: 2,
    rowSpan: 2,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/29f8b859-0829-4b74-80eb-904ae4137955_rw_1920.jpg?h=95bd400d9fa24b1c30386edbb5dc1ca7",
  },
  {
    rowSpan: 2,
    colSpan: 2,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/8878c4e8-fde0-4bd1-940c-e9a10b6bc2aa_rw_1920.jpg?h=36400e9496fa8f28d34b712f21d37e58",
  },

  {
    colSpan: 4,
    rowSpan: 2,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/7efba8fd-82b4-4674-b4b6-3041ab332460_rw_1920.png?h=90ecf036fc4aa2de2aa0b86bfd2e53b2",
  },
  {
    colSpan: 4,
    rowSpan: 2,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/6b953198-2ae1-48d7-aab2-558e05127d2d_rw_1920.png?h=14b141edd4c4b50a344fedc55476d989",
  },
  {
    colSpan: 4,
    rowSpan: 2,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/14293f48-e868-4872-8b68-6d42869be9d4_rw_1920.png?h=0d046241e0db9e65f0eb3948a2d5cf40",
  },
  {
    colSpan: 4,
    rowSpan: 2,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/969ed7d1-bddd-4250-86a0-6e47996acea8_rw_1920.png?h=7c21b8bf6d4dfb35b81a80d7c086c43a",
  },
  {
    colSpan: 4,
    rowSpan: 2,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/d0541409-8f39-4976-b814-03e8b0b8b5ae_rw_1920.png?h=ca8f314725a6bd7e7b3d4674d18cde52",
  },
  {
    colSpan: 4,
    rowSpan: 2,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/9b8cfb2f-93d1-4a48-b9c5-014bac6741c2.jpg?h=ce1a43f5c2b060b26ab7daad21008812",
  },
];

export default function Page() {
  return (
    <main>
      <ProjectHero
        title={ourCityCalgaryProject?.title || ""}
        subtitle={ourCityCalgaryProject?.subtitle || ""}
        image={ourCityCalgaryProject?.thumbnail || ""}
        categories={ourCityCalgaryProject?.categories || []}
      />

      <ProjectDescription
        description={ourCityCalgaryProject?.description || ""}
      />

      <ProjectGrid images={gridImages} maxColumns={4} />

      <ScrollToTop />
      <Footer />
    </main>
  );
}
