export type TypeMediaItem = {
  id: number;
  type: "image" | "video";
  title: string;
  src: string;
  category: string;
  thumbnail?: string;
  duration?: string;
  date: string;
};
