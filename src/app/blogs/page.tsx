import { Fragment } from "react";
import { PageHeader } from "@/components/molecules";
import { ListContainer } from "@/components/pages/blogs";

const BlogsPage = () => {
  return (
    <Fragment>
      <PageHeader title="ব্লগ" />
      <ListContainer />
    </Fragment>
  );
};

export default BlogsPage;
