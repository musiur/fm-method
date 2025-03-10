import { BookOpen, NotebookPen, PieChart, Shield, ShoppingCart, User } from "lucide-react";

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  platform: [
    {
      name: "Overview",
      url: "/dashboard",
      icon: <PieChart />,
    },
    {
      name: "Courses",
      url: "/dashboard/courses",
      icon: <BookOpen />,
    },
    {
      name: "Quizzes",
      url: "/dashboard/quizzes",
      icon: <NotebookPen />,
    },
    {
      name: "Purchases",
      url: "/dashboard/purchases",
      icon: <ShoppingCart />,
    },
  ],
  settings: [
    {
      name: "Profile",
      url: "/dashboard/profile",
      icon: <User />,
    },
    {
      name: "Authentication",
      url: "/dashboard/authentication",
      icon: <Shield />,
    },
  ],
};
