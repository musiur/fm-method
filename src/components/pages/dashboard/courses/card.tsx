import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypeGetBooksByTags } from "@/components/pages/home/type-get-books-by-tags";

export const Card = ({
    course,
    purchased,
}: {
    course: TypeGetBooksByTags;
    purchased?: boolean;
}) => {
    return (
        <div
            key={course.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
        >
            <div className="aspect-video overflow-hidden">
                <Image
                    src={course.thumbnail?.replaceAll("http://127.0.0.1:8000", "https://lms.fmmethod.online")?.replaceAll("http://localhost", "https://lms.fmmethod.online") || "/placeholder.svg"}
                    alt={course.title}
                    width={350}
                    height={200}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
            </div>
            <div className="flex flex-col flex-1 p-4 space-y-4">
                <div className="space-y-2 mb-4">
                    <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {course.title}
                    </h3>
                </div>
                <div
                    className={clsx("mt-auto space-y-2", {
                        hidden: purchased,
                    })}
                >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{course.difficulty}</span>
                        <span>•</span>
                        <span>{Math.floor(course.syllabus.total_duration / 60)} hours</span>
                    </div>
                </div>
                <Link href={`/courses/playlist?id=${course.id}`} className="inline-block flex-1">
                    <Button className="w-full" variant="outline">Start learning</Button>
                </Link>
            </div>
        </div>
    );
};
