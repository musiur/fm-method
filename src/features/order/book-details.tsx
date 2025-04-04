import { TypeCheckoutQueryParams } from "./types";

export const BookDetails = async ({ searchParams }: { searchParams: TypeCheckoutQueryParams }) => {
    const { productId, productType } = await searchParams;

    if(productType !== "book"){
        return null;
    }

    // fetch book details from using server action

    return (
        <div>Book details: {productId}</div>
    )
}