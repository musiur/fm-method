import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { TypeCard } from "./type-schema-card";

export const Card = ({
  course,
  purchased,
}: {
  course: TypeCard;
  purchased?: boolean;
}) => {
  return (
    <div
      key={course.id}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={course.thumbnail || "/placeholder.svg"}
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
          <div className="flex items-center gap-1">
            <span className="font-medium text-sm">
              {course.engagement.average_rating}
            </span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${i < Math.floor(course.engagement.average_rating)
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-muted-foreground"
                    }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({course.engagement.total_ratings})
            </span>
          </div>
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
          <div className="flex items-center gap-2">
            <span className="font-bold">
              ৳{course.pricing.sell_price.toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              ৳{course.pricing.regular_price.toFixed(2)}
            </span>
          </div>
        </div>
        <Link href={`/courses/${course.id}`} className="inline-block flex-1">
          <Button className="w-full">Start learning</Button>
        </Link>
      </div>
    </div>
  );
};