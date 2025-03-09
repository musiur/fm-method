import { Fragment } from "react";
import CourseResult from "./_partials/_components/course-result";
import PageHeader from "@/components/molecules/page-header/page-header";
const CourseSearchPage = () => {
  return (
    <Fragment>
      <PageHeader title="Courses Result" />
      <CourseResult />
    </Fragment>
  );
};

export default CourseSearchPage;
