const Page = async ({ searchParams }: { searchParams: Promise<{orderId: string, }>}) => {
    const orderId = (await searchParams)?.orderId;
    return (
        <div>Payment Cancelled for Order ID: {orderId}</div>
    )
}

export default Page;