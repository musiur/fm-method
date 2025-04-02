import Image from "next/image";
import { ImageIcon, Video, Play } from "lucide-react";
import { PlaceholderImageURL } from "@/lib/constants";
import { TypeMediaItem } from "./type-media-item";
import { formatDate } from "@/lib/utils";

interface GalleryGridProps {
  filteredMedia: TypeMediaItem[];
  openMedia: (media: TypeMediaItem) => void;
}

export const Grid = ({ filteredMedia, openMedia }: GalleryGridProps) => {
  if (filteredMedia.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-lg border border-dashed">
        <p className="text-center text-muted-foreground">
          No media items found matching your criteria. Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredMedia.map((item: TypeMediaItem) => (
        <div
          key={item.id}
          className="group relative cursor-pointer overflow-hidden rounded-lg"
          onClick={() => openMedia(item)}
        >
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={item.type === "image" ? item.src : item.thumbnail || PlaceholderImageURL}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-6 w-6" />
                </div>
                <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                  {item.duration}
                </span>
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-sm font-medium">{item.title}</h3>
            <p className="text-xs opacity-80">
              {item.category} • {formatDate(item.date)}
            </p>
          </div>
          <div className="absolute right-2 top-2">
            {item.type === "image" ? (
              <div className="rounded-full bg-black/50 p-1">
                <ImageIcon className="h-4 w-4 text-white" />
              </div>
            ) : (
              <div className="rounded-full bg-black/50 p-1">
                <Video className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
