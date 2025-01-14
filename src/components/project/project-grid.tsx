"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GridImage {
  url: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
}

interface ProjectGridProps {
  images: GridImage[];
  className?: string;
  maxColumns?: 2 | 3 | 4;
}

export function ProjectGrid({
  images,
  className,
  maxColumns = 3,
}: ProjectGridProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  return (
    <>
      <div className={cn("w-full py-12 mx-auto max-w-7xl", className)}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className={cn("grid grid-cols-1 gap-4 px-4 auto-rows-[300px]", {
            "md:grid-cols-2": maxColumns === 2,
            "md:grid-cols-3": maxColumns === 3,
            "md:grid-cols-4": maxColumns === 4,
          })}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className={cn(
                "relative overflow-hidden rounded-lg cursor-pointer h-full",
                {
                  "md:col-span-1": !image.colSpan || image.colSpan === 1,
                  "md:col-span-2": image.colSpan === 2,
                  "md:col-span-3": image.colSpan === 3,
                  "md:col-span-4": image.colSpan === 4,
                  "md:row-span-1": !image.rowSpan || image.rowSpan === 1,
                  "md:row-span-2": image.rowSpan === 2,
                  "md:row-span-3": image.rowSpan === 3,
                }
              )}
              onClick={() => setSelectedImageIndex(index)}
            >
              <Image
                src={image.url}
                alt={`Project image ${index + 1}`}
                fill
                sizes={`(max-width: 768px) 100vw, ${
                  image.colSpan
                    ? `${(image.colSpan / maxColumns) * 100}vw`
                    : `${(1 / maxColumns) * 100}vw`
                }`}
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
            >
              <div className="relative w-full h-full max-h-[90vh] md:max-w-[90vw]">
                <Image
                  src={images[selectedImageIndex].url}
                  alt="Selected image"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <button
                onClick={() => setSelectedImageIndex(null)}
                className="fixed top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={handlePrevImage}
                className="fixed left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors md:absolute"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={handleNextImage}
                className="fixed right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors md:absolute"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
