import StarRating from "@/components/molecules/rating";

const CourseDetailsHero = () => {
  const OTP =
    "20160313versASE323Hux3Mp2PtVpsNo8mLIzRqOs0KNyBJx6vvUQ9ry5Cmrts3X";
  const PLAYBACK_INFO =
    "eyJ2aWRlb0lkIjoiNWJmYTU4NTE4NDFlNGU1YjkzNDQwNTM5MmNiYTMyODMifQ==";
  return (
    <div className="bg-darkBrand section">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="[&>*]:text-white space-y-4 flex flex-col items-start justify-center col-span-1 lg:col-span-3">
          <h1 className="heading-one">Complete English Grammar Course</h1>
          <div>{StarRating(4.5)}</div>
          <p>
            সকল ক্ষেত্রেই ইংরেজি গ্রামার লাগবেই। এজন্য আমাদের &apos;Complete
            English Grammar Course&apos;-এ মুনজেরিন শহীদ শিখিয়েছেন কিভাবে মুখস্থ
            করা ছাড়াই, নিয়ম বুঝে, রিয়েল লাইফ উদাহরণের সাথে মিলিয়ে সহজেই
            গ্রামারের বেসিক মজবুত করা যায়। গ্রামারের সব টপিকের বেসিক টু অ্যাডভান
            িষয়গুলো একদম ডিটেইলে শিখতে এখনই জয়েন করুন কোর্সে।{" "}
          </p>
        </div>
        <div className="bg-transparent rounded-[20px] md:rounded-[32px] min-h-[400px] col-span-1 lg:col-span-2 overflow-hidden">
          <iframe
            src={`https://player.vdocipher.com/v2/?otp=${OTP}&playbackInfo=${PLAYBACK_INFO}`}
            style={{
              border: "0",
              width: "100%",
              height: "100%",
            }}
            allow="encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsHero;
