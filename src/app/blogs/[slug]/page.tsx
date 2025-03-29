import { Fragment } from "react";
import { Details } from "@/components/pages/blogs";
import { PageHeader } from "@/components/molecules";

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <Fragment>
      <PageHeader title={slug} />
      <Details />
    </Fragment>
  );
};

export default BlogPage;
