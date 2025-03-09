import { DataBlogList } from "../_data/data-blog-list";
import BlogCard from "./blog-card";

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {DataBlogList.map((blog) => (
        <BlogCard key={blog.slug} {...blog} />
      ))}
    </div>
  );
};
export default BlogList;
