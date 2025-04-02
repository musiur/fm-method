import Image, { StaticImageData } from "next/image";

const Slide = ({
  image,
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image src={image} alt="slide" className="w-full h-full max-w-[700px h-auto]" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default Slide;
