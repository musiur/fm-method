import { StarRating } from "@/components/molecules";
import { TypeDetailsHero } from "./type-details-hero";

const OTP =
    "20160313versASE323Hux3Mp2PtVpsNo8mLIzRqOs0KNyBJx6vvUQ9ry5Cmrts3X";
  const PLAYBACK_INFO =
    "eyJ2aWRlb0lkIjoiNWJmYTU4NTE4NDFlNGU1YjkzNDQwNTM5MmNiYTMyODMifQ==";



export const DetailsHero = ({
  title,
  rating,
  description,
  otp = OTP,
  playbackInfo = PLAYBACK_INFO,
}: TypeDetailsHero) => {
  return (
    <div className="bg-darkBrand section">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="[&>*]:text-white space-y-4 flex flex-col items-start justify-center col-span-1 lg:col-span-3">
          <h1 className="heading-one">{title}</h1>
          <div>{StarRating(Number(rating))}</div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="bg-transparent rounded-[20px] md:rounded-[32px] min-h-[400px] col-span-1 lg:col-span-2 overflow-hidden">
          <iframe
            src={`https://player.vdocipher.com/v2/?otp=${otp}&playbackInfo=${playbackInfo}`}
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
