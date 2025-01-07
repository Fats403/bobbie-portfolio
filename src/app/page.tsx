"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { TimelineDemo } from "@/components/timeline-demo";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/ui/footer";

export default function Page() {
  return (
    <>
      <HeroParallax products={products} />
      <TimelineDemo />
      <ContactForm />
      <Footer />
    </>
  );
}

export const products = [
  {
    title: "Downtown Map",
    link: "/downtown-map",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fdowntown-map.webp?alt=media&token=dbf55d44-555a-43da-9b6c-181e6d1a9775",
  },
  {
    title: "Mechanical Insects",
    link: "/mechanical-insects",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fmechanical-insects.webp?alt=media&token=899b4f77-edb8-4248-ac19-319752e9d611",
  },
  {
    title: "Ruby Garden",
    link: "/ruby-garden",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fruby-garden.webp?alt=media&token=689c4daa-2384-4ffd-8c10-8ef3ad75d4b4",
  },
  {
    title: "Hatshepsut",
    link: "/hatshepsut",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fhatshepsut.webp?alt=media&token=bc0a9b31-f972-456a-aaf7-43200d0e6c75",
  },
  {
    title: "Our City Calgary",
    link: "/our-city-calgary",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Four-city-calgary.webp?alt=media&token=75084efe-033d-4a6a-83d0-c31a7f7e63aa",
  },
  {
    title: "Calgary Throughout the Seasons",
    link: "/calgary-seasons",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fcalgary-seasons.webp?alt=media&token=4b3e0008-b267-4834-8479-279490b5271d",
  },
  {
    title: "Bragg Creek Performing Arts",
    link: "/bragg-creek-performing-arts",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fbragg-creek-performing-arts.webp?alt=media&token=fd5683c4-e56c-493f-940a-c703948dd834",
  },
  {
    title: "Astral",
    link: "/astral",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fastral_40.webp?alt=media&token=84076bfe-0ef2-4a80-90dc-6309e945d036",
  },
  {
    title: "Downtown Map",
    link: "/downtown-map",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fdowntown-map.webp?alt=media&token=dbf55d44-555a-43da-9b6c-181e6d1a9775",
  },
  {
    title: "Mechanical Insects",
    link: "/mechanical-insects",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fmechanical-insects.webp?alt=media&token=899b4f77-edb8-4248-ac19-319752e9d611",
  },
  {
    title: "Ruby Garden",
    link: "/ruby-garden",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fruby-garden.webp?alt=media&token=689c4daa-2384-4ffd-8c10-8ef3ad75d4b4",
  },
  {
    title: "Hatshepsut",
    link: "/hatshepsut",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fhatshepsut.webp?alt=media&token=bc0a9b31-f972-456a-aaf7-43200d0e6c75",
  },
  {
    title: "Our City Calgary",
    link: "/our-city-calgary",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Four-city-calgary.webp?alt=media&token=75084efe-033d-4a6a-83d0-c31a7f7e63aa",
  },
  {
    title: "Calgary Throughout the Seasons",
    link: "/calgary-seasons",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fcalgary-seasons.webp?alt=media&token=4b3e0008-b267-4834-8479-279490b5271d",
  },
  {
    title: "Bragg Creek Performing Arts",
    link: "/bragg-creek-performing-arts",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fbragg-creek-performing-arts.webp?alt=media&token=fd5683c4-e56c-493f-940a-c703948dd834",
  },
  {
    title: "Astral",
    link: "/astral",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/capturescape-b4385.firebasestorage.app/o/bobbie%2Fastral_40.webp?alt=media&token=84076bfe-0ef2-4a80-90dc-6309e945d036",
  },
];
