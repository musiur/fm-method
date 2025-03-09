export type TypeEventCard = {
  title: string;
  author: string;
  date: {
    day: number;
    month: string;
  };
  category?: string;
  shortDescription: string;
  comments?: number;
  imageUrl: string;
  slug: string;
}