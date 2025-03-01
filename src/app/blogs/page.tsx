import PageHeader from "@/components/molecules/page-header/page-header";
import { Fragment } from "react";
import BlogListContainer from "./_utils/_components/blog-list-container";

const BlogsPage = () => {
  return (
    <Fragment>
      <PageHeader title="ব্লগ" />
      <BlogListContainer />
    </Fragment>
  );
};

export default BlogsPage;
