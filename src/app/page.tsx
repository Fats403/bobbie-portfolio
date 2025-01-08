"use client";
import React from "react";
import { Footer } from "@/components/ui/footer";
import { ProjectsParallax } from "@/components/landing/projects-parallax";
import { MyJourneyTimeline } from "@/components/landing/my-journey-timeline";
import { ContactForm } from "@/components/landing/contact-form";

export default function Page() {
  return (
    <main>
      <ProjectsParallax />
      <MyJourneyTimeline />
      <ContactForm />
      <Footer />
    </main>
  );
}
