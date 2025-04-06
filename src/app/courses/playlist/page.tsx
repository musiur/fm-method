import { PlaylistPage } from "@/components/pages/courses"

const Page = ({ searchParams }: { searchParams: Promise<{ id: string }>}) => {
  return <PlaylistPage searchParams={searchParams}/>;
}

export default Page;
