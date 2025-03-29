import { Fragment } from "react";
import { Result } from "@/components/pages/courses";
import { PageHeader } from "@/components/molecules";

const CourseSearchPage = () => {
  return (
    <Fragment>
      <PageHeader title="Courses Result" />
      <Result />
    </Fragment>
  );
};

export default CourseSearchPage;
