import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Facebook,
  MessageCircle,
  Share,
  Tag,
  Twitter,
  UserCircle,
} from "lucide-react";
import { TypeBlogCard } from "../_types/type-blog-card";

const BlogCard = ({
  title,
  author,
  date,
  category = "Association",
  comments = 0,
  imageUrl,
  slug,
  shortDescription,
}: TypeBlogCard) => {
  console.log(date);
  return (
    <div className="max-w-3xl border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-[200px] md:h-[320px]">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>

        <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
          <div className="flex items-center gap-2">
            <UserCircle size={14} /> {author}
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={14} /> {comments} কমেন্টস
          </div>
          <div className="flex items-center gap-2">
            <Tag size={14} /> {category}
          </div>
        </div>

        <p className="text-gray-700 mb-4">{shortDescription}</p>

        <div className="flex justify-between items-center">
          <Link
            href={`/blogs/${slug}`}
            className="text-primary font-medium flex items-center gap-2"
          >
            আরো পড়ুন <ChevronRight size={16} />
          </Link>

          <div className="flex space-x-2">
            <button className="text-white bg-primary p-2 rounded-full">
              <Share size={14} />
            </button>
            <button className="text-white bg-primary p-2 rounded-full">
              <Facebook size={14} />
            </button>
            <button className="text-white bg-primary p-2 rounded-full">
              <Twitter size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
