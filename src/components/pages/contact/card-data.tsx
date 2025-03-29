import EmailBigIcon from "./email-big-icon";
import LocationBigIcon from "./location-big-icon";
import PhoneBigIcon from "./phone-big-icon";
import { TypeCardData } from "./type-card-data";

export const CardData: TypeCardData[] = [
  {
    id: 1,
    title: "Phone",
    description: "123-456-7890",
    icon: <PhoneBigIcon />,
    link: "tel:123-456-7890",
  },
  {
    id: 2,
    title: "Email",
    description: "info@example.com",
    icon: <EmailBigIcon />,
    link: "mailto:info@example.com",
  },
  {
    id: 3,
    title: "Location",
    description: "123 Main St, Anytown, USA",
    icon: <LocationBigIcon />,
    link: "https://www.google.com/maps",
  },
];
