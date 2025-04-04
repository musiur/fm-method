import { PageHeader } from "@/components/molecules";
import {
    TypeCheckoutQueryParams,
    CourseDetails,
    CheckoutDetails
} from ".";
import { Fragment } from "react";


export const CheckoutPageContents = ({ searchParams }: { searchParams: TypeCheckoutQueryParams }) => {

    return (
        <Fragment>
            <PageHeader title="Confirm your purchase"/>
            <section className="section container flex flex-col md:flex-row items-start gap-10">
                <CourseDetails searchParams={searchParams} />
                <CheckoutDetails />
            </section>
        </Fragment>
    )
}