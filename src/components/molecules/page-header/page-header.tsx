import Image from "next/image";
import BackgroundImage from "./page-header-background-image.png";
import { CustomBreadcrumb } from "../custom-breadcrumb";

export const PageHeader = ({
  title = "Page Header",
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div className="relative bg-white/0 border-b">
      <Image
        src={BackgroundImage}
        alt="Page Header"
        fill={true}
        className="w-full h-full object-cover z-[-1]"
      />
      <div className="container section flex flex-col items-center justify-center gap-4">
        <h2 className="heading-two">{title}</h2>
        {description ? <p>{description}</p> : null}
        <CustomBreadcrumb />
      </div>
    </div>
  );
};
