"use client";

import { useState } from "react";
import { DataMediaItems } from "../_data/data-media-items";
import { TypeMediaItem } from "../_types/type-media-item";
import GalleryFilters from "./gallery-filters";
import GalleryGrid from "./gallery-grid";
import GalleryLightbox from "./gallery-lightbox";

const GalleryPage = () => {
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
        <GalleryFilters
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

        <GalleryGrid filteredMedia={filteredMedia} openMedia={openMedia} />

        <GalleryLightbox
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

export default GalleryPage;
