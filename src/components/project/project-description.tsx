"use client";

import { BoxReveal } from "../ui/box-reveal";
import { motion } from "framer-motion";

export default function ProjectDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="max-w-4xl mx-auto mt-6 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 1 }}
        className="border-l-4 border-primary/50 pl-6 py-2 text-center italic text-base md:text-lg font-medium text-muted-foreground"
      >
        <BoxReveal duration={0.5} boxColor="hsl(var(--primary))">
          {description}
        </BoxReveal>
      </motion.div>
    </div>
  );
}
