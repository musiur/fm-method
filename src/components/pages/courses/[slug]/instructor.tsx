import FMSirTwo from "@/components/assets/fm-sir-two.png";
import Image from "next/image";
import { TypeDetailsInstructor } from "./type-details";

export const Instructor = (props: TypeDetailsInstructor) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={FMSirTwo}
            alt="fm-sir-two"
            width={100}
            height={100}
            className="object-cover object-center"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">{props.name}</p>
          <p className="text-gray-500">{props.institution}</p>
          <p className="text-gray-500">{props.expertise}</p>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-gray-700">{props.experience}</p>
        <p className="text-gray-700">{props.achievements}</p>
      </div>
    </div>
  );
};
