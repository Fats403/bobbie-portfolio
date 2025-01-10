import React from "react";
import { Metadata } from "next";
import { GridImage, ProjectGrid } from "@/components/project/project-grid";
import { ProjectHero } from "@/components/project/project-hero";
import { projectData } from "@/lib/projects-data";
import ProjectDescription from "@/components/project/project-description";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Footer } from "@/components/ui/footer";

const astralProject = projectData.find((project) => project.link === "/astral");

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://bobbieye.com"),
    title: "Astral | Bobbie Ye Portfolio",
    description:
      "Explore Astral - A mesmerizing collection of visual designs and artwork showcasing ethereal landscapes and surreal compositions by Bobbie Ye.",
    openGraph: {
      title: "Astral | Bobbie Ye Portfolio",
      description:
        "Explore Astral - A mesmerizing collection of visual designs and artwork showcasing ethereal landscapes and surreal compositions by Bobbie Ye.",
      images: [
        {
          url: projectData[7].link || "",
          width: 1200,
          height: 630,
          alt: "Astral Project Preview",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Astral | Bobbie Ye Portfolio",
      description:
        "Explore Astral - A mesmerizing collection of visual designs and artwork showcasing ethereal landscapes and surreal compositions by Bobbie Ye.",
      images: [projectData[7].link || ""],
    },
  };
}

const gridImages: GridImage[] = [
  {
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/d8d7e8b3-b5f9-4777-9e86-3a019bc59802.gif?h=33a426cedfb6030ee4da10f107314194",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/cd21a921-d880-4aee-9d8e-4da47e1d06b2_rw_1920.png?h=bee6f27102c013a1edf3414c189fa587",
  },
  {
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/899e1369-b9a7-4bdf-a5d1-1bcdd245095d_rw_1920.png?h=f04e33916af8193ca939042a00838b64",
  },
  {
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/03822217-34ad-4ad0-b520-e07884e5d0a8_rw_3840.png?h=68de094c430f77cdd391640980073d03",
  },
  {
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/5a393ed3-79d7-4202-ba65-8d6a067c9051.jpg?h=3a9611d57f959ce9903f2680c27bd9b2",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/54b64d32-dd4e-455e-ad7b-13faa3aff995_rw_1920.gif?h=7925ce26aebaaba9b7051de58b6d2d76",
  },
  {
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/6829da74-ec59-492b-bc9e-6002aaa8337a.jpg?h=2f6f05d16533d3d24d225413b24085fa",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/533938f2-fcf1-47ed-9415-bdabcef13568.jpg?h=faaf5e71337047d3c0ad75e7364c0fb2",
  },
  {
    colSpan: 2,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/900542ba-4f64-41b4-9162-3b5b0aa031f7.jpg?h=acc0b1c3f4edb6d9af867c6bd82bbe19",
  },
  {
    rowSpan: 2,
    colSpan: 3,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/5f2adb27-63e2-41d2-9e18-92bb74aab415.jpg?h=f73297775d9e782c597c5d678933abc7",
  },
  {
    rowSpan: 2,
    colSpan: 3,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/5600e047-f9cb-4be5-af97-6edb5b1bfa5a.jpg?h=9cafee9b178b4bd232f51235440ef7e9",
  },
  {
    rowSpan: 2,
    colSpan: 3,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/d5020cbf-99dc-4b99-bf4c-9f7aab20af2a_rw_1920.jpg?h=ee368b5cadbd4a0ff5178743afdd99b4",
  },
  {
    rowSpan: 2,
    colSpan: 3,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/220013d9-45a8-46a4-b4df-1b368826173e_rw_1920.jpg?h=4c7f4cc5f670b0af023a3a8fd52894a7",
  },
  {
    rowSpan: 2,
    colSpan: 3,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/63a88891-f72b-45bf-ba62-f00cb1b0957a_rw_1920.jpg?h=2ae520fc9047f70a15d15245e42aff55",
  },
  {
    rowSpan: 2,
    colSpan: 3,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/1e04d8cb-6e81-4c33-af95-1b1737428255_rw_1920.jpg?h=b0079df83bc08c26547a25c1a70a16fb",
  },
  {
    rowSpan: 2,
    colSpan: 3,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/10cf60ad-5be6-445c-ae1d-20d726492b3e.jpg?h=738250c75e4d3ef65a30c19c162f766e",
  },
  {
    rowSpan: 2,
    colSpan: 3,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/690642f1-19fb-4e5b-bb18-1956161f745f_rw_1920.jpg?h=7360b99fa1dfb77b8d6ea6ae0742b8b0",
  },
  {
    rowSpan: 2,
    colSpan: 3,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/5c34ff4f-17a2-45e1-8f3b-d8e01862089f_rw_1920.jpg?h=1047c22c81b3bbe236e2cef79a7c0d7f",
  },
  {
    rowSpan: 2,
    colSpan: 3,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/71703e86-5579-4cc4-b73c-c556876518ef_rw_1920.jpg?h=0ce00e72f39c1bd6fd7bf35ba57cdeab",
  },
  {
    rowSpan: 2,
    colSpan: 3,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/a7bab180-138d-43ef-918b-37d1e4afbdd2_rw_1920.jpg?h=01ba99b81fa2064fef603490a39116d9",
  },
  {
    rowSpan: 2,
    colSpan: 3,
    url: "https://cdn.myportfolio.com/4b906b66-9d96-4ab1-9fe1-7514cfe5aeb2/1d6a2a5b-c5a7-4c96-9af0-8c7f54689c1b_rw_1920.jpg?h=9a7b4e7b898cf260f9b41e8740c0bdaa",
  },
] as const;

export default function Page() {
  return (
    <main>
      <div
        className="w-full h-full fixed inset-0 z-0"
        style={{
          opacity: 0.08,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <ProjectHero
        title={astralProject?.title || ""}
        subtitle={astralProject?.subtitle || ""}
        image={astralProject?.thumbnail || ""}
        categories={astralProject?.categories || []}
      />

      <ProjectDescription description={astralProject?.description || ""} />

      <ProjectGrid images={gridImages} maxColumns={3} />

      <ScrollToTop />

      <Footer />
    </main>
  );
}
