"use client";

import { useState } from "react";
import { DataMediaItems } from "./data-media-items";
import { TypeMediaItem } from "./type-media-item";
import { Filters } from "./filters";
import { Grid } from "./grid";
import { Lightbox } from "./lightbox";

export const Page = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentMedia, setCurrentMedia] = useState<TypeMediaItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Filter media items based on selected tab and category
  const filteredMedia = DataMediaItems.filter((item) => {
    const matchesType =
      selectedTab === "all" ||
      (selectedTab === "images" && item.type === "image") ||
      (selectedTab === "videos" && item.type === "video");
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchesType && matchesCategory;
  });

  // Handle opening the media in a modal
  const openMedia = (media: TypeMediaItem) => {
    setCurrentMedia(media);
    setIsDialogOpen(true);
  };

  // Navigate to previous media in the lightbox
  const goToPrevious = () => {
    if (!currentMedia) return;

    const currentIndex = filteredMedia.findIndex(
      (item) => item.id === currentMedia.id
    );
    if (currentIndex > 0) {
      setCurrentMedia(filteredMedia[currentIndex - 1]);
    } else {
      // Loop to the end if at the beginning
      setCurrentMedia(filteredMedia[filteredMedia.length - 1]);
    }
  };

  // Navigate to next media in the lightbox
  const goToNext = () => {
    if (!currentMedia) return;

    const currentIndex = filteredMedia.findIndex(
      (item) => item.id === currentMedia.id
    );
    if (currentIndex < filteredMedia.length - 1) {
      setCurrentMedia(filteredMedia[currentIndex + 1]);
    } else {
      // Loop to the beginning if at the end
      setCurrentMedia(filteredMedia[0]);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <Filters
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Results count */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredMedia.length} of {DataMediaItems.length} media
            items
          </p>
        </div>

        <Grid filteredMedia={filteredMedia} openMedia={openMedia} />

        <Lightbox
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
          currentMedia={currentMedia}
          goToPrevious={goToPrevious}
          goToNext={goToNext}
        />
      </div>
    </div>
  );
};