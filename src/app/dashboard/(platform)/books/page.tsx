import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GET_BOOKS } from "@/api/books/get-books";
import { PlaceholderImageURL } from "@/lib/constants";
import { TypeActionResponse } from "@/lib/types/action-response";

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

const BookList = async () => {
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
        <h3 className="text-lg font-semibold">
          {book.title}{" "}
          <span className="h-6 px-2 rounded-md text-xs bg-gray-200">
            {book.type}
          </span>
        </h3>
        <p className="text-sm">{book.description}</p>
      </div>
      <Button variant="outline" className="w-full">Download now</Button>
    </div>
  ));

  return (
    <div className="py-8">
      <div className="container space-y-8">
        <h2 className="text-lg md:text-xl font-semibold leading-tight">
          Book list
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list}
        </div>
      </div>
    </div>
  );
};

export default BookList;
