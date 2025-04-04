import Image from "next/image";
import { actionGetCourseDetailsByID } from "@/actions/courses/get-course-details-by-id";
import { TypeCheckoutQueryParams } from "./types"
import { TypeActionResponse } from "@/lib/types/action-response";
import { TypeDetails } from "@/components/pages/courses";

export const CourseDetails = async ({ searchParams }: { searchParams: TypeCheckoutQueryParams }) => {
    const { productId, productType } = await searchParams;

    if (productType !== "course") {
        return null;
    }

    if (!productId) {
        return <div>No course details found!</div>;
    }

    const result: TypeActionResponse<TypeDetails> = await actionGetCourseDetailsByID(productId);

    if (!result?.success || !result?.data) {
        return <div>No course details found!</div>;
    }

    const {
        title,
        category,
        thumbnail,
        pricing,
        features,
        course_type,
        metadata
    } = result.data;

    return (
        <div className="inline-flex border bg-gradient-to-tr from-primary/20 to-white rounded-lg p-2">
            <Image src={thumbnail} alt={title} width={200} height={200} className="w-sm rounded-md object-cover" />
            <div className="p-4 space-y-4">
                <p className="text-sm md:text-lg font-semibold">{title} by {metadata.instructor}</p>
                <ul className="flex items-center gap-1 flex-wrap">
                    {[metadata.course_code, course_type, category.name, ...features].map((item: string, index: number) => (
                        <li key={index} className="text-xs bg-primary/10 rounded-full px-1">{item}</li>
                    ))}
                </ul>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">
                        ৳{pricing.regular_price}
                    </span>
                    <span className="font-bold">৳{pricing.sell_price}</span>
                </div>
            </div>
        </div>
    )
}