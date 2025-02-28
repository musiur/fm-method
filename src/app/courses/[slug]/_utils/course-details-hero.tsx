import StarRating from "@/components/molecules/rating";

const CourseDetailsHero = () => {
    return <div className="bg-darkBrand section">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="[&>*]:text-white space-y-4 flex flex-col items-start justify-center col-span-1 lg:col-span-3">
                <h1 className="heading-one">Complete English Grammar Course</h1>
                <div>
                    {StarRating(4.5)}
                </div>
                <p>সকল ক্ষেত্রেই ইংরেজি গ্রামার লাগবেই। এজন্য আমাদের 'Complete English
                    Grammar Course'-এ মুনজেরিন শহীদ শিখিয়েছেন কিভাবে মুখস্থ করা ছাড়াই, নিয়ম বুঝে, রিয়েল লাইফ
                    উদাহরণের সাথে মিলিয়ে সহজেই গ্রামারের বেসিক মজবুত করা যায়। গ্রামারের সব টপিকের বেসিক টু অ্যাডভান
                    িষয়গুলো একদম ডিটেইলে শিখতে এখনই জয়েন করুন কোর্সে। </p>
            </div>
            <div className="bg-white/60 rounded-[20px] md:rounded-[32px] p-6 md:p-10 min-h-[400px] col-span-1 lg:col-span-2">Video</div>
        </div>
    </div>;
};

export default CourseDetailsHero;
