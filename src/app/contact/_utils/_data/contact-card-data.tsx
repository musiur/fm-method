import EmailBigIcon from "../_assets/email-big-icon";
import LocationBigIcon from "../_assets/location-big-icon";
import PhoneBigIcon from "../_assets/phone-big-icon";
import { TypeContactCardData } from "../_types/type-contact-card-data";

export const ContactCardData: TypeContactCardData[] = [
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
