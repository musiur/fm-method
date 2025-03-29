import { PlaceholderImageURL } from "@/lib/constants";
import { TypeMediaItem } from "./type-media-item";

export const DataMediaItems: TypeMediaItem[] = [
    {
        id: 1,
        type: "image",
        title: "Campus Library",
        src: PlaceholderImageURL,
        category: "Campus",
        date: "2023-09-15",
    },
    {
        id: 2,
        type: "video",
        title: "Introduction to Biology Course",
        src: "https://example.com/video1.mp4", // This would be your actual video URL
        thumbnail: PlaceholderImageURL,
        duration: "3:45",
        category: "Courses",
        date: "2023-08-22",
    },
    {
        id: 3,
        type: "image",
        title: "Student Workshop",
        src: PlaceholderImageURL,
        category: "Events",
        date: "2023-10-05",
    },
    {
        id: 4,
        type: "video",
        title: "Virtual Campus Tour",
        src: "https://example.com/video2.mp4", // This would be your actual video URL
        thumbnail: PlaceholderImageURL,
        duration: "5:20",
        category: "Campus",
        date: "2023-07-12",
    },
    {
        id: 5,
        type: "image",
        title: "Graduation Ceremony",
        src: PlaceholderImageURL,
        category: "Events",
        date: "2023-06-30",
    },
    {
        id: 6,
        type: "image",
        title: "Science Lab",
        src: PlaceholderImageURL,
        category: "Facilities",
        date: "2023-09-08",
    },
    {
        id: 7,
        type: "video",
        title: "Student Testimonials",
        src: "https://example.com/video3.mp4", // This would be your actual video URL
        thumbnail: PlaceholderImageURL,
        duration: "4:15",
        category: "Students",
        date: "2023-08-05",
    },
    {
        id: 8,
        type: "image",
        title: "Computer Lab",
        src: PlaceholderImageURL,
        category: "Facilities",
        date: "2023-07-25",
    },
    {
        id: 9,
        type: "video",
        title: "Faculty Introduction",
        src: "https://example.com/video4.mp4", // This would be your actual video URL
        thumbnail: PlaceholderImageURL,
        duration: "6:30",
        category: "Faculty",
        date: "2023-09-20",
    },
    {
        id: 10,
        type: "image",
        title: "Student Lounge",
        src: PlaceholderImageURL,
        category: "Facilities",
        date: "2023-10-10",
    },
    {
        id: 11,
        type: "image",
        title: "Campus Garden",
        src: PlaceholderImageURL,
        category: "Campus",
        date: "2023-08-15",
    },
    {
        id: 12,
        type: "video",
        title: "Online Learning Tutorial",
        src: "https://example.com/video5.mp4", // This would be your actual video URL
        thumbnail: PlaceholderImageURL,
        duration: "7:50",
        category: "Courses",
        date: "2023-09-28",
    },
];