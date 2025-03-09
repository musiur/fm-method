import PageHeader from "@/components/molecules/page-header/page-header";
import { Fragment } from "react";
import BlogDetails from "./_partials/_components/blog-details";

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <Fragment>
      <PageHeader title={slug} />
      <BlogDetails />
    </Fragment>
  );
};

export default BlogPage;
