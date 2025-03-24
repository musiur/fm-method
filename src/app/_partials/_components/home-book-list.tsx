import { GET_BOOKS } from "@/app/_partials/_actions/get-books";
import { TypeActionResponse } from "@/lib/types/action-response";
import Image from "next/image";
import { PlaceholderImageURL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

type Books = {
  id: number;
  title: string;
  image: null | string;
  description: string;
  general_price: string;
  discount: string;
  sell_price: string;
  quantity: number;
  type: string;
  pdf: null | string;
};

const HomeBookList = async () => {
  const booksData: TypeActionResponse<Books[]> = await GET_BOOKS();

  if (!booksData.success) {
    return <div>No book list found!</div>;
  }

  const list = booksData.data?.slice(0, 8)?.map((book) => (
    <div key={book.id} className="space-y-4 pb-8">
      <Image
        src={PlaceholderImageURL}
        alt={book.title}
        width={300}
        height={300}
        className="w-full h-auto"
      />
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{book.title} <span className="h-6 px-2 rounded-md text-xs bg-gray-200">{book.type}</span></h3>
        <p className="text-sm">{book.description}</p>
        <div className="flex items-center gap-2">
          <p className="text-sm line-through">৳{book.general_price}</p>
          <p className="text-sm">৳{book.sell_price}</p>
        </div>
      </div>
      <Button className="w-full">Purchase Now</Button>
    </div>
  ));

  return (
    <div className="section">
      <div className="container space-y-8">
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-center">
            All books
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {list}
        </div>
        {/* <Carousel list={list} title="home-new-english-courses-list" col={4} grid={true} /> */}
      </div>
    </div>
  );
};

export default HomeBookList;
