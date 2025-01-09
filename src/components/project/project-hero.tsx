import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  categories: string[];
}

export const ProjectHero = ({
  title,
  subtitle,
  image,
  categories,
}: ProjectHeroProps) => {
  return (
    <div className="relative min-h-[60vh] sm:min-h-[70vh] w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-10 max-w-[650px]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {categories.map((category) => (
              <motion.span
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="px-3 py-1 rounded-full bg-primary/50 text-primary-foreground text-xs sm:text-sm"
              >
                {category}
              </motion.span>
            ))}
          </div>

          {/* Title & Subtitle */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-4"
          >
            {title}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl text-secondary mb-4 sm:mb-6"
          >
            {subtitle}
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
};
