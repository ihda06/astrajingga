"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExperienceDocumentationProps {
  images: string[];
  experienceTitle: string;
  companyName?: string;
}

export default function ExperienceDocumentation({
  images,
  experienceTitle,
  companyName,
}: ExperienceDocumentationProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setIsDialogOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false);
    setSelectedImageIndex(null);
  }, []);

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (selectedImageIndex === null) return;

      if (direction === "prev") {
        const newIndex =
          selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1;
        setSelectedImageIndex(newIndex);
      } else {
        const newIndex =
          selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1;
        setSelectedImageIndex(newIndex);
      }
    },
    [selectedImageIndex, images.length]
  );

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  // Keyboard navigation
  useEffect(() => {
    if (!isDialogOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      } else if (e.key === "Escape") {
        closeDialog();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDialogOpen, navigateImage, closeDialog]);

  return (
    <>
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col gap-4"
      >
        <Card className="border-amber-100/60 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-emerald-600">Documentation</CardTitle>
            <CardDescription>
              Screenshots and visual documentation from this experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((img, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border-emerald-100/60 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group cursor-pointer relative aspect-video"
                  onClick={() => openDialog(i)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={img}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      alt={`${experienceTitle} documentation screenshot ${
                        i + 1
                      } showing ${
                        companyName || "company"
                      } work - Ihda Anwari portfolio`}
                      fill
                      loading={i < 6 ? "lazy" : "lazy"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Image Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="max-w-[85vw] w-full h-[85vh] max-h-[85vh] p-0 gap-0 border-0 bg-transparent shadow-none overflow-hidden"
          onInteractOutside={closeDialog}
          onEscapeKeyDown={closeDialog}
        >
          {selectedImage && selectedImageIndex !== null && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>
                  {experienceTitle} - Image {selectedImageIndex + 1} of{" "}
                  {images.length}
                </DialogTitle>
              </DialogHeader>

              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 cursor-pointer md:left-4 top-1/2 z-50 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-700 backdrop-blur-sm rounded-full border border-gray-200/50 hover:border-gray-300/70 transition-all duration-200 shadow-sm hover:shadow-md size-10 md:size-11"
                    onClick={() => navigateImage("prev")}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-4 md:size-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 cursor-pointer md:right-4 top-1/2 -translate-y-1/2 z-50 bg-white/80 hover:bg-white/90 text-gray-700 backdrop-blur-sm rounded-full border border-gray-200/50 hover:border-gray-300/70 transition-all duration-200 shadow-sm hover:shadow-md size-10 md:size-11"
                    onClick={() => navigateImage("next")}
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-4 md:size-5" />
                  </Button>
                </>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 text-gray-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm border border-gray-200/50 shadow-sm">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              )}

              {/* Full-size Image Container */}
              <div className="relative w-full h-full flex items-center justify-center backdrop-blur-xl bg-linear-to-br from-sky-50 via-white to-amber-50">
                <div className="relative w-full h-full max-w-full max-h-full p-2 md:p-4">
                  <motion.div
                    key={selectedImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={selectedImage}
                      alt={`${experienceTitle} documentation screenshot ${
                        selectedImageIndex + 1
                      } showing ${
                        companyName || "company"
                      } work - Ihda Anwari portfolio`}
                      fill
                      className="object-contain"
                      quality={95}
                      priority
                      sizes="98vw"
                    />
                  </motion.div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
