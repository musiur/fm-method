"use client"

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { TypeMediaItem } from "./type-media-item";
import { formatDate } from "@/lib/utils";
import { PlaceholderImageURL } from "@/lib/constants";

interface GalleryLightboxProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  currentMedia: TypeMediaItem | null;
  goToPrevious: () => void;
  goToNext: () => void;
}

export const Lightbox = ({
  isOpen,
  setIsOpen,
  currentMedia,
  goToPrevious,
  goToNext,
}: GalleryLightboxProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!currentMedia) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTitle className="hidden">{currentMedia.title}</DialogTitle>
      <DialogContent className="max-w-4xl p-0 sm:p-0">
        <div className="relative">
          {currentMedia.type === "image" ? (
            <div className="relative h-[80vh] w-full">
              <Image
                src={currentMedia.src || PlaceholderImageURL}
                alt={currentMedia.title}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="relative aspect-video w-full">
              <video
                ref={videoRef}
                src={currentMedia.src}
                poster={currentMedia.thumbnail}
                controls
                className="h-full w-full"
              />
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
            <h2 className="text-xl font-medium">{currentMedia.title}</h2>
            <p className="text-sm opacity-80">
              {currentMedia.category} •{" "}
              {currentMedia.date && formatDate(currentMedia.date)}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};