import { CheckoutPageContents, TypeCheckoutQueryParams } from "@/features/order"

// @ / _ / () = need to refactor so that searchParams won't prop drilled
const CheckoutPage = ({ searchParams }: { searchParams: TypeCheckoutQueryParams }) => (<CheckoutPageContents
    searchParams={searchParams}
/>)

export default CheckoutPage;