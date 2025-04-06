import { CourseDetailsPage } from "@/components/pages/courses"

const Page = ({ params }: { params: Promise<{ slug: string}>}) => {
  return <CourseDetailsPage params={params}/>
}

export default Page